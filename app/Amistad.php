<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cliente;
use Illuminate\Support\Facades\Auth;
class Amistad extends Model
{


    protected $table = "amistad";
    protected $primaryKey = "codAmistad";
    public $timestamps = false;  //para que no trabaje con los campos fecha 
    
 
    public function getUsuarioA(){
      return Usuario::findOrFail($this->codUsuarioA);
    }

    public function getUsuarioB(){
      return Usuario::findOrFail($this->codUsuarioB);
    }


    /* solo retorna el valor, no guarda nada */
    public function calcularIndice() : int {

      $usuarioA = $this->getUsuarioA();
      $usuarioB = $this->getUsuarioB();


      $lenguajes = LenguajeAmor::All();
  
      $total = 0;
      foreach ($lenguajes as $lenguaje) {
  
        $puntuacionA = PuntuacionLenguaje::where('codUsuario',$usuarioA->codUsuario)->where('codLenguaje',$lenguaje->codLenguaje)->first();
        $puntuacionB = PuntuacionLenguaje::where('codUsuario',$usuarioB->codUsuario)->where('codLenguaje',$lenguaje->codLenguaje)->first();
        
        $acum_A_B = $puntuacionA->puntajeDar * $puntuacionB->puntajeRecibir;
        $acum_B_A = $puntuacionB->puntajeDar * $puntuacionA->puntajeRecibir;
        
        $total+= $acum_A_B + $acum_B_A;
      }
  
      $total = $total/100;
  
      // NORMALIZAMOS
      return static::normalizar($total);
    }

    public static function normalizar($x){
      return 10*sqrt($x);
  
    }



    public static function getAmigosDeUsuario(int $codUsuario){

      
      $amistades = Amistad::orWhere('codUsuarioA',$codUsuario)->orWhere('codUsuarioB',$codUsuario)->get();
      Debug::mensajeSimple(count($amistades));
      $arrayCodsUsuario = [];
      foreach ($amistades as $amistad) {

        if($amistad->codUsuarioA != $codUsuario)
          $arrayCodsUsuario[] = $amistad->codUsuarioA;
        if($amistad->codUsuarioB != $codUsuario)
          $arrayCodsUsuario[] = $amistad->codUsuarioB;
        
      }
      
      return Usuario::whereIn('codUsuario',$arrayCodsUsuario)->get();
    }

    public static function verificarAmistad(int $codUsuario1 ,int $codUsuario2){

      $amistades1 = Amistad::where('codUsuarioA',$codUsuario1)->where('codUsuarioB',$codUsuario2)->get();
      $amistades2 = Amistad::where('codUsuarioA',$codUsuario2)->where('codUsuarioB',$codUsuario1)->get();
      $total = count($amistades1) + count($amistades2);

      if($total == 0){
        return false;
      }else{
        return true;
      }
      
    }

}
