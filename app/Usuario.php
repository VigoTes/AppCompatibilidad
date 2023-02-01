<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cliente;
use Error;
use Exception;
use Illuminate\Support\Facades\Auth;
use League\CommonMark\Extension\SmartPunct\PunctuationParser;

class Usuario extends Model
{


    protected $table = "usuario";
    protected $primaryKey = "codUsuario";
    public $timestamps = false;  //para que no trabaje con los campos fecha 


    protected $fillable = [
        'codCliente', 'email','password','fechaActualizacion','isAdmin'
    ];


    public static function añadirNombreCompletoAColeccion($listaUsuarios){
      foreach ($listaUsuarios as $usuario) {
        $usuario['getNombreCompleto'] = $usuario->getNombreCompleto();
      }
      return $listaUsuarios;
    }

    public static function getLogeado() : Usuario {
        return Usuario::findOrFail(Auth::id());
    }

    public function getNombreCompleto(){
      return $this->apellidos." ". $this->nombres;
    }

    public function esAdmin() : bool{
      return $this->codRol == 1; //si es admin
    }
    public function estaVerificado() : bool{
      return $this->verificado == 1; //si es admin
    }

    public function getAmigos(){
      return Amistad::getAmigosDeUsuario($this->codUsuario);
    }


    public function getPuntuacionesLenguajes(){
      return PuntuacionLenguaje::where('codUsuario',$this->codUsuario)->get();
    }

    public function getIndiceCompatibilidad($codUsuario){
      

      $lista1 = Amistad::where('codUsuarioA',$this->codUsuario)->where('codUsuarioB',$codUsuario)->get();
      if(count($lista1) != 0){
        $amistad = $lista1[0];
        return $amistad->indiceObtenido;
      }


      $lista2 = Amistad::where('codUsuarioB',$this->codUsuario)->where('codUsuarioA',$codUsuario)->get();
      if(count($lista2) != 0){
        $amistad = $lista2[0];
        return $amistad->indiceObtenido;
      }
      
      throw new Exception("No hay amistad entre los usuarios indicados");
    }

    public function getRol() : Rol{
      return Rol::findOrFail($this->codRol);
    }

    
    public function getLinkReferido(){
      $app_url = Configuracion::getAppURL();

      return $app_url.'/ref/'.$this->codigoUnico;
    }
}
