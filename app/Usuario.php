<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cliente;
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



    public function getPuntuacionesLenguajes(){
      return PuntuacionLenguaje::where('codUsuario',$this->codUsuario)->get();
    }


    public function getRol() : Rol{
      return Rol::findOrFail($this->codRol);
    }

    
    public function getLinkReferido(){
      $app_url = Configuracion::getAppURL();

      return $app_url.'/ref/'.$this->codigoUnico;
    }
}
