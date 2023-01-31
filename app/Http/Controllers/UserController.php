<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Usuario;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Cliente;
use Illuminate\Support\Carbon;
use App\Carrito;
use App\LenguajeAmor;
use App\PersonaReniec;
use App\PuntuacionLenguaje;
use Exception;
use Illuminate\Support\Facades\DB;
class UserController extends Controller
{

    const PAGINATION = 10; // PARA QUE PAGINEE DE 10 EN 10
    public function logearse(Request $request)
    {
       

        //error_log('El hash para '.$request->password.' es '.Hash::make($request->password));
        $data=$request->validate([
            'usuario'=>'required',
            'password'=>'required',
        ],
        [
            'usuario.required'=>'Ingrese E-mail', 
            'password.required'=>'Ingrese Contraseña',
        ]);
            $usuario=$request->get('usuario');
            $query=User::where('usuario','=',$usuario)->get();
             
            if($query->count()!=0){
               // error_log($query[0].'aaaaaaaaaaaaaaaaaaa');
                $hashp=$query[0]->password; // guardamos la contraseña cifrada de la BD en hashp
                $password=$request->get('password');    //guardamos la contraseña ingresada en password
                if(password_verify($password,$hashp))       //comparamos con el metodo password_verifi ??¡ xdd
                {
                        // Preguntamos si es admin o no
                    //LogeoHistorial::registrarLogeo();
                    if($usuario=='admin@admin.com')
                    {

                        //SI INGRESÓ EL ADMIN 
                        if(Auth::attempt($request->only('usuario','password'))){ //este attempt es para que el Auth se inicie
                            
                            return redirect()->route('user.home');
                        }
                    }//si es user normal
                    else{
                        if(Auth::attempt($request->only('usuario','password'))){
                            
                            return redirect()->route('user.home');
                        }
    
                    }
                }
                else{
                    return back()->withErrors(['password'=>'Contraseña no válida'])->withInput([request('password')]);
                }                
            }
            else
            {
                return redirect()->route('user.verLogin')->with('datos','Usuario no valido!');
            }
        }


        public function index(Request $Request)
        {
            $buscarpor = $Request->buscarpor;
            $usuarios = User::where('name','like','%'.$buscarpor.'%')
                ->where('estadoAct','=','1')
                ->paginate($this::PAGINATION);
    
            //cuando vaya al index me retorne a la vista
            return view    ('tablas.usuarios.index',compact('usuarios','buscarpor')); 
            //el compact es para pasar los datos , para meter mas variables meterle mas comas dentro del compact
    
    
            // otra forma sería hacer ['categoria'] => $categoria
        }


    public function create()
    {
        
    }
    public function verLogin(){
        return view('login');
    }


    public function verRegistrarme(){
      return view('registrarme');
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
          return redirect()->route('user.verPaso2')->with('datos',"Su cuenta ha sido creada exitosamente.");
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
 

    public function cerrarSesion(){
        Auth::logout();
         
        return redirect()->route('user.verLogin');  
    }



    public function verRegistrar(){
        
        return view('Pasos.Paso1');
    }

    public function verPaso2(){
      $listaLenguajes = LenguajeAmor::All();
      $user = Usuario::getLogeado();
      
      $puntuacionActual = PuntuacionLenguaje::where('codUsuario',$user->codUsuario)->get();

      
      return view('Pasos.Paso2',compact('listaLenguajes','puntuacionActual'));
    }


    public function home(){
      
      if(is_null(Auth::id()))
        return redirect()->route('user.verLanding');

      
 
      return view('Bienvenido');
    }

    public function MisLenguajes(){
      $listaLenguajes = LenguajeAmor::All();
      $user = Usuario::getLogeado();
      
      $puntuacionActual = PuntuacionLenguaje::where('codUsuario',$user->codUsuario)->get();



      return view('Reusables.MisLenguajes',compact('listaLenguajes','puntuacionActual'));

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
      
      return redirect()->route('user.verPaso3')->with('datos',"Sus puntajes fueron actualizados exitosamente");

    }


    
    public function verificarLogin(){
        $valor=0;
        if(!is_null(Auth::user())){
            $valor=1;
        }
        return $valor;
    }

  

}
