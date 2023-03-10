<?php

namespace App\Http\Controllers;

use App\Configuracion;
use App\LenguajeAmor;
use App\LogeoHistorial;
use App\PersonaReniec;
use App\PuntuacionLenguaje;
use App\RespuestaAPI;
use App\User;
use App\Usuario;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\ErrorHandler\Debug;

class UsuarioController extends Controller
{
    const PAGINATION = 15;

    public function Listar(){
        $usuarios = Usuario::paginate($this::PAGINATION);

        return view('Usuarios.Listar',compact('usuarios'));
    }

    public function Crear(){
        return view('Usuarios.Crear');
    }

    public function Editar($id){
        $usuario=Usuario::findOrFail($id);
        return view('Usuarios.Editar',compact('usuario'));
    }

    public function Eliminar($id){
        $usuario=Usuario::findOrFail($id);
        $usuario->delete();
        return redirect()->route('Usuarios.Listar')
                ->with('datos','Usuario '.$usuario->email.' eliminado exitosamente');
    }



    public function Guardar(Request $request){
        try{
            DB::beginTransaction();
            
            $usuario=new Usuario();
            $usuario->usuario=$request->usuario;
            $usuario->dni=$request->dni;
            $usuario->nombres=$request->nombres;
            $usuario->apellidos=$request->apellidos;
            $usuario->codigoUnico="adadada";
            
            $usuario->verificado=0;
            
            $usuario->codRol = 1;
            
            $usuario->password=hash::make($request->password1);
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
            return redirect()->route('Usuarios.Listar')
                ->with('datos','Usuario '.$usuario->usuario.' registrado exitosamente');
            
        }catch (\Throwable $th) {
            throw $th;
          
            error_log(' Usuario CONTROLLER guardar usuario '.$th);    
            DB::rollback();

            return redirect()->route('Usuarios.Listar')
                ->with('datos','Error al registrar un usuario');
                
        }
         
    }
    public function Update(Request $request){
        try{
            DB::beginTransaction();
            
            $usuario=Usuario::findOrFail($request->codUsuario);
            $usuario->email=$request->email;
            $usuario->password=hash::make($request->password1);
            $usuario->save();
            

            db::commit();
            return redirect()->route('Usuarios.Listar')
                ->with('datos','Usuario '.$usuario->email.' editado exitosamente');
            
        }catch (\Throwable $th) {
            //Debug::mensajeError(' ACTOR CONTROLLER guardarcrearactor' ,$th);    
            DB::rollback();

            return redirect()->route('Usuarios.Listar')
                ->with('datos','Error al editar un usuario');
                
        }
         
    }




    
    public function consultarPorDNIYUsuario($dni_y_usuario){
      $array = explode("*",$dni_y_usuario);
      $dni = $array[0];
      $usuario = $array[1];

      $usuariosConEseDni = Usuario::where('dni',$dni)->get();
      if(count($usuariosConEseDni)>0){
        return RespuestaAPI::respuestaError("La persona con ese DNI ya est?? registrada en el sistema. En caso de no tener acceso a esa cuenta, cont??ctenos por redes sociales para verificar su informaci??n.");
      }

      $usuariosConEseUsername = Usuario::where('usuario',$usuario)->get();
      if(count($usuariosConEseUsername)>0){
        return RespuestaAPI::respuestaError("El nombre de usuario ya est?? tomado.");
      }

      return PersonaReniec::ConsultarAPISunatDNI($dni);
    }

    /* POST, crea una cuenta */
    public function crearCuentaPorDefecto(Request $request){
      try {
        $email = $request->email;
        $dni = $request->dni;

        $personaEncontrada = PersonaReniec::ConsultarAPISunatDNI($dni);
        if($personaEncontrada['ok'] != '1'){
          $msjError = $personaEncontrada['mensaje'];
          if(str_contains($msjError,'No se encon')){
            return RespuestaAPI::respuestaDatosError("No se encontr?? a esta persona en RENIEC");
          }

          throw new Exception("Error al consultar el dni a Reniec: " . $personaEncontrada['mensaje']);
        }
        $personaEncontrada = $personaEncontrada['datos'];

        $usuario = new Usuario();
        $usuario->email=$email;
        $usuario->dni=$dni;
        $usuario->nombres=$personaEncontrada['nombres'];
        $usuario->apellidos=$personaEncontrada['apellidoPaterno']." ".$personaEncontrada['apellidoMaterno'];
        $usuario->codRol = 2;
        $usuario->verificado = 0;
        $usuario->password =hash::make($dni); 
        $usuario->save();

        return RespuestaAPI::respuestaDatosOk("Se cre?? exitosamente la cuenta del usuario ".$usuario->nombres,$usuario);
        
        
      } catch (\Throwable $th) {
        throw $th;
      }


    }


    public function verificarExistenciaUsuarioConDNI($dni){
      
      $usuariosConEseDni = Usuario::where('dni','=',$dni)->get();
      $exist = false;
      $codUsuario = null;
      $nombre = "";

      if(count($usuariosConEseDni) > 0){
        $exist = true;
        $codUsuario = $usuariosConEseDni[0]->codUsuario;
        $nombre = $usuariosConEseDni[0]->getNombreCompleto();
      }


      return [
        'exist' => $exist,
        'codUsuario' => $codUsuario,
        'nombre'=>$nombre
      ];

    }


    public function guardarMisPuntajes(Request $request){

        

      
    }


}
