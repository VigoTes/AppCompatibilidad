<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cliente;
use Exception;
use Illuminate\Support\Facades\Auth;
class EstadoSolicitudAmistad extends Model
{


    protected $table = "estado_solicitud_amistad";
    protected $primaryKey = "codEstado";
    public $timestamps = false;  //para que no trabaje con los campos fecha 
    
 
    public static function getCodEstado($nombre){

      $list = EstadoSolicitudAmistad::where('nombre',$nombre)->get();      
      if(count($list) == 0){
        throw new Exception("No existe ningun estado_solicitud_amistad con el nombre $nombre");
      }

      return $list[0]->codEstado;
    }
 
 

}
