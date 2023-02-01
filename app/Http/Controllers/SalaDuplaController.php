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
  
  




}
