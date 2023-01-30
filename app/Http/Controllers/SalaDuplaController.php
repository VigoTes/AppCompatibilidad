<?php

namespace App\Http\Controllers;

use App\LenguajeAmor;
use App\PuntuacionLenguaje;
use App\SalaDupla;
use App\User;
use App\Usuario;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class SalaDuplaController extends Controller
{
     

  public function ListarSalas(){

    $listaSalas = SalaDupla::All();


    return view('SalasDupla.ListarSalas',compact('listaSalas'));

  }



  /* crea una sala y te redirije a ella */
  public function CrearNueva(){
    try {
      
      $usuarioLogeado = Usuario::getLogeado();
      $sala = new SalaDupla();
      $sala->codUsuarioA = $usuarioLogeado->getId();
      $sala->indiceObtenido = 0;
      $sala->save();
      

      return redirect('SalaDupla.Ver',$sala->getId());

    } catch (\Throwable $th) {
      //throw $th;
    }


  }

  /* Renders the view */
  public function Ver($codigoUnico){

    $sala = SalaDupla::where('codigoUnico',$codigoUnico)->first();
    $jugadores = ["A","B"];

    $listaLenguajes = LenguajeAmor::All();
    

    return view('SalasDupla.VerSalaDupla',compact('sala','listaLenguajes','jugadores'));
  }
  
  
  public function calcularCompatibilidad($codigoUnico){

    $sala = SalaDupla::where('codigoUnico',$codigoUnico)->first();
    $usuarioA = $sala->getUsuarioA();
    $usuarioB = $sala->getUsuarioB();
    $lenguajes = LenguajeAmor::All();

    $total = 0;
    foreach ($lenguajes as $lenguaje) {

      $puntuacionA = PuntuacionLenguaje::where('codUsuario',$usuarioA->codUsuario)->where('codLenguaje',$lenguaje->codLenguaje)->first();
      $puntuacionB = PuntuacionLenguaje::where('codUsuario',$usuarioB->codUsuario)->where('codLenguaje',$lenguaje->codLenguaje)->first();

      $acum_A_B = $puntuacionA->puntajeDar * $puntuacionB->puntajeRecibir;
      $acum_B_A = $puntuacionB->puntajeDar * $puntuacionA->puntajeRecibir;
      
      $total+= $acum_A_B + $acum_B_A;
    }

    $total = $total/200;

    // NORMALIZAMOS
    return static::normalizar($total);
  }
  
  public static function normalizar($x){
    return 10*sqrt($x);

  }



}
