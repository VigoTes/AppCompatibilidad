<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cliente;
use Illuminate\Support\Facades\Auth;
class PuntuacionLenguaje extends Model
{


    protected $table = "puntuacion_lenguaje";
    protected $primaryKey = "codPuntuacionLenguaje";
    public $timestamps = false;  //para que no trabaje con los campos fecha 
    
 

}
