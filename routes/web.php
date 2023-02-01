<?php

use App\EstadoIntencion;
use App\Http\Controllers\EntradaController;
use App\Http\Controllers\FuncionController;
use App\PersonaReniec;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;


/* RUTAS PARA INGRESO Y REGISTRO DE USUARIO Y CLIENTE */


Route::get('/', 'UserController@home')->name('user.home');

Route::get('/login', 'UserController@verLogin')->name('user.verLogin'); //para desplegar la vista del Login


Route::post('/ingresar', 'UserController@logearse')->name('user.logearse'); //post

Route::get('/cerrarSesion','UserController@cerrarSesion')->name('user.cerrarSesion');

Route::get('/Config/MisLenguajes','FlujoController@verEditarMisLenguajes')->name('user.MisLenguajes');
Route::get('/Config/MisAmigos','AmistadController@verMisAmigos')->name('user.MisAmigos');



Route::get('/Landing','FlujoController@verLanding')->name('Flujo.VerLanding');
Route::get('/Step1','FlujoController@verRegistrar')->name('Flujo.VerPaso1');
Route::post('/Step1/Guardar', 'FlujoController@registrarme')->name('Flujo.Registrarme'); //para desplegar la vista del Login
Route::get('/Step2','FlujoController@verPaso2')->name('Flujo.VerPaso2');
Route::post('/Step2/Guardar','FlujoController@GuardarMisLenguajes')->name('Flujo.GuardarMisLenguajes');
Route::get('/Step3','FlujoController@verPaso3')->name('Flujo.VerPaso3');

Route::post('/Amigos/EnviarSolicitudAmistad','AmistadController@EnviarSolicitudAmistad')->name('user.EnviarSolicitudAmistad');
Route::get('/Amigos/Inv_VerMisAmigos','AmistadController@inv_verMisAmigos')->name('user.inv_verMisAmigos');

Route::post('/Amigos/UpdateSolicitudRecibida','AmistadController@UpdateSolicitudRecibida')->name('user.UpdateSolicitudRecibida');
Route::post('/Amigos/CancelarSolicitud','AmistadController@CancelarSolicitud')->name('user.CancelarSolicitud');

Route::get('/usuarios/consultarPorDNIYUsuario/{dni}','UsuarioController@consultarPorDNIYUsuario')->name('consultarPorDNIYUsuario');
Route::get('/usuarios/verificarExistenciaUsuarioConDNI/{dni}','UsuarioController@verificarExistenciaUsuarioConDNI')->name('verificarExistenciaUsuarioConDNI');
Route::post('/usuarios/crearCuentaPorDefecto','UsuarioController@crearCuentaPorDefecto')->name('usuarios.crearCuentaPorDefecto');



Route::get('/probandoCosas',function(){
    
});

Route::get('/Cartelera','StaticController@VerCartelera')->name('VerCartelera');
Route::get('/Nosotros','StaticController@VerNosotros')->name('VerNosotros');
Route::get('/Contactanos','StaticController@VerContactanos')->name('VerContactanos');



Route::group(['middleware'=>"ValidarSesion"],function()
{

    /* USUARIOS */
    
    Route::get('/Usuarios/Listar','UsuarioController@Listar')->name('Usuarios.Listar');

    Route::get('/Usuarios/Crear','UsuarioController@Crear')->name('Usuarios.Crear');
    Route::get('/Usuarios/{id}/Editar','UsuarioController@Editar')->name('Usuarios.Editar');
    
    Route::post('/Usuarios/Guardar','UsuarioController@Guardar')->name('Usuarios.Guardar');
    Route::post('/Usuarios/Update','UsuarioController@Update')->name('Usuarios.Update');
    
    Route::get('/Usuarios/{id}/eliminar','UsuarioController@Eliminar')->name('Usuarios.Eliminar');
    
    
    /* PELICULA */
    Route::get('/SalasDuplas/Listar','SalaDuplaController@ListarSalas')->name('SalaDupla.Listar');
    Route::get('/SalasDuplas/CrearNueva','SalaDuplaController@CrearNueva')->name('SalaDupla.CrearNueva');
    Route::get('/SalasDuplas/Ver/{codigoUnico}','SalaDuplaController@Ver')->name('SalaDupla.Ver');
    
 

 
  

});


