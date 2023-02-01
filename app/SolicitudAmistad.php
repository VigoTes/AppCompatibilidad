<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cliente;
use Illuminate\Support\Facades\Auth;
class SolicitudAmistad extends Model
{


    protected $table = "solicitud_amistad";
    protected $primaryKey = "codSolicitud";
    public $timestamps = false;  //para que no trabaje con los campos fecha 
    
 
    public function getUsuarioEmisor(){
      return Usuario::findOrFail($this->codUsuarioEmisor);
    }

    public function getUsuarioReceptor(){
      return Usuario::findOrFail($this->codUsuarioReceptor);
    }
 
    public function getFechaHoraEmision(){
      return Fecha::formatoFechaHoraParaVistas($this->fechaHoraEmision);
    }

}
