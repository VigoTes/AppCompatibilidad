<?php

namespace App\Http\Controllers;

use App\Amistad;
use App\Entrada;
use App\EstadoSolicitudAmistad;
use App\Fecha;
use App\Funcion;
use App\LenguajeAmor;
use App\Pelicula;
use App\PuntuacionLenguaje;
use App\RespuestaAPI;
use App\Sala;
use App\SolicitudAmistad;
use App\User;
use App\Usuario;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class AmistadController extends Controller
{


  function verMisAmigos(){

    $usuario = Usuario::getLogeado();
    $listaAmigos = $usuario->getAmigos();

    $codEstadoPendiente = EstadoSolicitudAmistad::getCodEstado('pendiente');

    $listaSolicitudesAmistadEnviadas = SolicitudAmistad::where('codUsuarioEmisor',$usuario->codUsuario)->where('codEstado',$codEstadoPendiente)->get();
    $listaSolicitudesAmistadRecibidas = SolicitudAmistad::where('codUsuarioReceptor',$usuario->codUsuario)->where('codEstado',$codEstadoPendiente)->get();




    return view('Amistad.VerMisAmigos',compact('listaAmigos','usuario','listaSolicitudesAmistadEnviadas','listaSolicitudesAmistadRecibidas'));

  }


  function inv_verMisAmigos(){
    $usuario = Usuario::getLogeado();
    $listaAmigos = $usuario->getAmigos();

    $codEstadoPendiente = EstadoSolicitudAmistad::getCodEstado('pendiente');

    $listaSolicitudesAmistadEnviadas = SolicitudAmistad::where('codUsuarioEmisor',$usuario->codUsuario)->where('codEstado',$codEstadoPendiente)->get();
    $listaSolicitudesAmistadRecibidas = SolicitudAmistad::where('codUsuarioReceptor',$usuario->codUsuario)->where('codEstado',$codEstadoPendiente)->get();

    $solicitudes_enviadas = view('Amistad.Inv_SolicitudesEnviadas',compact('listaSolicitudesAmistadEnviadas'))->render();
    $solicitudes_recibidas = view('Amistad.Inv_SolicitudesRecibidas',compact('listaSolicitudesAmistadRecibidas'))->render();
    $mis_amigos = view('Amistad.Inv_Amigos',compact('listaAmigos'))->render();
    

    return [
      'solicitudes_enviadas' => $solicitudes_enviadas,
      'solicitudes_recibidas' => $solicitudes_recibidas,
      'mis_amigos' => $mis_amigos,
    ];

  }


  /* post */
  public function EnviarSolicitudAmistad(Request $request){

    try {
      db::beginTransaction();
      $usuarioLogeado = Usuario::getLogeado();
      $username = $request->username;


      /* verificamos existencia usuario */
      $usuarios = Usuario::where('usuario',$username)->get();
      if(count($usuarios) == 0){
        return RespuestaAPI::respuestaError("No existe el usuario '$username'.");
      }
      $usuarioReceptor = $usuarios[0];


      $codEstadoPendiente = EstadoSolicitudAmistad::getCodEstado('pendiente');

      /* verificamos si no hay una solicitud ya creada de este usuario a ese (en estado pendiente)*/
      $solicitudes = SolicitudAmistad::where('codUsuarioEmisor',$usuarioLogeado->codUsuario)->where('codUsuarioReceptor',$usuarioReceptor->codUsuario)->where('codEstado',$codEstadoPendiente)->get();
      if(count($solicitudes) != 0){
        return RespuestaAPI::respuestaError("Ya hay una solicitud de amistad pendiente hacia ese usuario '$username'.");
      }

      /* verificamos si no hay una solicitud ya creada de ese usuario a este (en estado pendiente)*/
      $solicitudes = SolicitudAmistad::where('codUsuarioEmisor',$usuarioReceptor->codUsuario)->where('codUsuarioReceptor',$usuarioLogeado->codUsuario)->where('codEstado',$codEstadoPendiente)->get();
      if(count($solicitudes) != 0){
        return RespuestaAPI::respuestaError("Ya hay una solicitud de amistad pendiente del usuario '$username', aceptela.");
      }

      /* verificamos si no son amigos ya */
      $sonAmigos = Amistad::verificarAmistad($usuarioLogeado->codUsuario,$usuarioReceptor->codUsuario);
      if($sonAmigos){
        return RespuestaAPI::respuestaError("Actualmente ya es amigo del usuario '$username'.");
      }

      /* Creamos la solicitud de amistad, ahora sí */
      $solicitud = new SolicitudAmistad();
      $solicitud->codUsuarioEmisor = $usuarioLogeado->codUsuario;
      $solicitud->codUsuarioReceptor = $usuarioReceptor->codUsuario;
      $solicitud->codEstado = $codEstadoPendiente;
      $solicitud->fechaHoraEmision = new Carbon();
      $solicitud->save();

      db::commit();

      return RespuestaAPI::respuestaOk("Solicitud de amistad enviada exitosamente");
    } catch (\Throwable $th) {
      
      return RespuestaAPI::respuestaError("Ocurrió un error inesperado");
    }

  }

  /* 
  POST
  FUNCION PARA ACEPTAR O RECHAZAR UNA SOLICITUD QUE RECIBI
  
  */
  public function UpdateSolicitudRecibida(Request $request){

    try {
      db::beginTransaction();
      $usuarioLogeado = Usuario::getLogeado();
      $solicitud = SolicitudAmistad::findOrFail($request->codSolicitud);
      $new_state = $request->state == 'true';
  
      if($usuarioLogeado->codUsuario != $solicitud->codUsuarioReceptor){
        $username = $solicitud->getUsuarioReceptor()->usuario;
        return RespuestaAPI::respuestaError("Solo el usuario receptor $username puede aceptar la solicitud de amistad");
      }

      if($new_state){
        $msj = "aceptada";
        $codNuevoEstadoSolicitud = EstadoSolicitudAmistad::getCodEstado('aceptada');
        
        // creamos la amistad
        $amistad = new Amistad();
        $amistad->codUsuarioA = $solicitud->codUsuarioEmisor;
        $amistad->codUsuarioB = $solicitud->codUsuarioReceptor;
        $amistad->save();
        $solicitud->fechaHoraAceptacion = new Carbon();

        

      }else{
        $codNuevoEstadoSolicitud = EstadoSolicitudAmistad::getCodEstado('rechazada');
        $msj = "rechazada";
        $solicitud->fechaHoraRechazo = new Carbon();
        
      }

      $solicitud->codEstado = $codNuevoEstadoSolicitud;
      $solicitud->save();

      db::commit();

      return RespuestaAPI::respuestaOk("Solicitud de amistad $msj exitosamente");
    } catch (\Throwable $th) {
      
      return RespuestaAPI::respuestaError("Ocurrió un error inesperado");
    }


  }

  /* 
  POST
  FUNCION PARA CANCELAR UNA SOLICITUD QUE YO MANDÉ
  */
  public function CancelarSolicitud(Request $request){

    try {
      db::beginTransaction();
      $usuarioLogeado = Usuario::getLogeado();
      $solicitud = SolicitudAmistad::findOrFail($request->codSolicitud);
       
  
      if($usuarioLogeado->codUsuario != $solicitud->codUsuarioEmisor){
        $username = $solicitud->getUsuarioReceptor()->usuario;
        return RespuestaAPI::respuestaError("Solo el usuario emisor $username puede cancelar la solicitud de amistad");
      }

      $solicitud->delete();

      db::commit();

      return RespuestaAPI::respuestaOk("Solicitud de amistad cancelada exitosamente");
    } catch (\Throwable $th) {
      
      return RespuestaAPI::respuestaError("Ocurrió un error inesperado");
    }


  }

  


}