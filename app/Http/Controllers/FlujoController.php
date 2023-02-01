<?php

namespace App\Http\Controllers;

use App\Entrada;
use App\Fecha;
use App\Funcion;
use App\LenguajeAmor;
use App\Pelicula;
use App\PuntuacionLenguaje;
use App\Sala;
use App\User;
use App\Usuario;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class FlujoController extends Controller
{
  public function verRegistrar(){
        
    return view('Pasos.Paso1');
  }


  public function registrarme(Request $request){
    try{
      DB::beginTransaction();
      $usuario=new Usuario();
      $usuario->usuario=$request->usuario;
      $usuario->password=hash::make($request->password);
      $usuario->codRol = 2;
      $usuario->verificado = 0;
      $usuario->codigoUnico = "temp";
      $usuario->save();

      $usuario->codigoUnico = uniqid($usuario->codUsuario."_",false);
      $usuario->save();
      
      
      $lenguajes = LenguajeAmor::All();
      foreach ($lenguajes as $lenguaje) {
        $len = new PuntuacionLenguaje();
        $len->codUsuario = $usuario->getId();
        $len->codLenguaje = $lenguaje->getId();
        $len->puntajeDar = 0;
        $len->puntajeRecibir = 0;
        $len->save();
      }

      
      db::commit();
      //ya está creado el usuario, ahora iniciamos su sesión

      if(Auth::attempt($request->only('usuario','password'))){
        return redirect()->route('Flujo.VerPaso2')->with('datos',"Su cuenta ha sido creada exitosamente.");
      }else{
        throw new Exception("Por alguna razón el logeo fue incorrecto");
      }


    }catch (\Throwable $th) {
        throw $th;      
        error_log(' User Controller registrarme '.$th);    
        DB::rollback();
        return redirect()->route('Usuarios.Listar')
            ->with('datos','Error al registrar un usuario');
    }
  }




  public function verLanding(){
    return view('Pasos.Landing');
  }

  /* GET */
  public function verPaso3(){

    $usuario = Usuario::getLogeado();


    return view('Pasos.Paso3',compact('usuario'));


  }

  /* GET */
  public function verPaso2(){
    $listaLenguajes = LenguajeAmor::All();
    $user = Usuario::getLogeado();
    
    $puntuacionActual = PuntuacionLenguaje::where('codUsuario',$user->codUsuario)->get();

    
    return view('Pasos.Paso2',compact('listaLenguajes','puntuacionActual'));
  }


  public function verEditarMisLenguajes(){
    $listaLenguajes = LenguajeAmor::All();
    $user = Usuario::getLogeado();
    
    $puntuacionActual = PuntuacionLenguaje::where('codUsuario',$user->codUsuario)->get();

    return view('UsuarioPropio.EditarMisLenguajes',compact('listaLenguajes','puntuacionActual'));


  }


  public function GuardarMisLenguajes(Request $request){


    $puntajes = json_decode($request->json_puntajes);
    $user = Usuario::getLogeado();

    foreach ($puntajes as $puntaje) {
      $puntuacion = PuntuacionLenguaje::where('codUsuario',$user->codUsuario)->where('codLenguaje',$puntaje->codLenguaje)->first();
      $puntuacion->puntajeDar = $puntaje->puntajeDar;
      $puntuacion->puntajeRecibir = $puntaje->puntajeRecibir;
      $puntuacion->save();
    }
    
    return redirect()->route('Flujo.VerPaso3')->with('datos',"Sus puntajes fueron actualizados exitosamente");

  }



}