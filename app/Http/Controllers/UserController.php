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



 

    public function cerrarSesion(){
        Auth::logout();
         
        return redirect()->route('user.verLogin');  
    }







    public function home(){
      
      if(is_null(Auth::id()))
        return redirect()->route('Flujo.VerLanding');

      
 
      return view('Bienvenido');
    }

    public function MisLenguajes(){
      $listaLenguajes = LenguajeAmor::All();
      $user = Usuario::getLogeado();
      
      $puntuacionActual = PuntuacionLenguaje::where('codUsuario',$user->codUsuario)->get();



      return view('Reusables.MisLenguajes',compact('listaLenguajes','puntuacionActual'));

    }




    
    public function verificarLogin(){
        $valor=0;
        if(!is_null(Auth::user())){
            $valor=1;
        }
        return $valor;
    }

  

}
