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
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CompatibilidadController extends Controller
{
  
  public function verLanding(){
    return view('Pasos.Landing');
  }

  /* GET */
  public function verPaso3(){

    $usuario = Usuario::getLogeado();


    return view('Pasos.Paso3',compact('usuario'));


  }


  public function verEditarMisLenguajes(){
    $listaLenguajes = LenguajeAmor::All();
    $user = Usuario::getLogeado();
    
    $puntuacionActual = PuntuacionLenguaje::where('codUsuario',$user->codUsuario)->get();

    return view('UsuarioPropio.EditarMisLenguajes',compact('listaLenguajes','puntuacionActual'));


  }

}