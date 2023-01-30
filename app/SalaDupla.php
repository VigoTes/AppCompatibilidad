<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Cliente;
use Illuminate\Support\Facades\Auth;
class SalaDupla extends Model
{


    protected $table = "sala_dupla";
    protected $primaryKey = "codSala";
    public $timestamps = false;  //para que no trabaje con los campos fecha 
    
  
    public function getUsuarioA(){
      return Usuario::findOrFail($this->codUsuarioA);
    }

    public function getUsuarioB(){
      return Usuario::findOrFail($this->codUsuarioB);
    }
    
    

}
