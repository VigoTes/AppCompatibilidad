@extends('Layout.Plantilla')
@section('titulo')
    App de Compatibiliad
@endsection

@section('contenido')
@include('Reusables.Loader')
<div class="text-center">
  <div class="row">
    <div class="col-sm-3">

      
      <div class="step-title">
        Solicitudes de amistad - ENVIADAS
      </div>
      <div class="row my-2">
        <div class="col-10"> 
          <input type="text" placeholder="Buscar por nombre de usuario" class="form-control" id="usuario" name="usuario">
          @csrf
        </div>
        <div class="col-2">


          
          <button class="btn btn-primary btn-sm" onclick="clickAñadirAmigo()">
            Añadir
            <i class="fas fa-search"></i>
          </button>
            
        </div>

      </div>
      <div class="d-flex mt-3" id="solicitudes_enviadas">


        
        
             

      </div>

    </div>
    <div class="col-sm-3">

      
      <div class="step-title">
        Solicitudes de amistad - RECIBIDAS
      </div>
      
      <div class="d-flex mt-3" id="solicitudes_recibidas">


        
             

      </div>

    </div>
    
    <div class="col-sm-6">

 
      
      <div class="step-title">
        Mis Amigos
      </div>
      
      <div class="d-flex mt-3" id="mis_amigos">


        
        
             

      </div>
      

    </div>
    
  </div>


</div>
  
 
@endsection
 
@section('estilos')
@include('Reusables.EstilosPasos')
@endsection

<style>
  .cabecera{
    background-color: #57a1d9;
    color: white;
    font-weight: 700;
  }
  

</style>

<script>
  
    document.addEventListener('DOMContentLoaded', onMounted, false);
    
    function onMounted(){
      updateTablas();
      $(".loader").hide();
    }


  function clickAñadirAmigo(){
    var username = document.getElementById('usuario').value;
    var csrf = document.getElementsByName('_token')[0].value;

    if(!username){
      alertaMensaje("Error","Ingrese un nombre de usuario","warning")
      return;
    }
    ruta = "{{route('user.EnviarSolicitudAmistad')}}"
    var datosAEnviar = {
      username:username,
      _token:   csrf,
    };


    $.post(ruta, datosAEnviar, function(dataRecibida){
        console.log('DATA RECIBIDA:');
        console.log(dataRecibida);
        
        objetoRespuesta = dataRecibida;
        alertaMensaje(objetoRespuesta.titulo,objetoRespuesta.mensaje,objetoRespuesta.tipoWarning);
        
        updateTablas();

    });
  }



  function updateTablas(){


    var ruta = "{{route('user.inv_verMisAmigos')}}"

    $.get(ruta, function(dataRecibida){
        console.log('DATA RECIBIDA:');
        console.log(dataRecibida);
         
        document.getElementById('solicitudes_enviadas').innerHTML = dataRecibida.solicitudes_enviadas;
        document.getElementById('solicitudes_recibidas').innerHTML = dataRecibida.solicitudes_recibidas;
        document.getElementById('mis_amigos').innerHTML = dataRecibida.mis_amigos;

    });

  }


  function clickCancelarSolicitud(codSolicitud){
    var csrf = document.getElementsByName('_token')[0].value;


    ruta = "{{route('user.CancelarSolicitud')}}"
    var datosAEnviar = {
      codSolicitud:codSolicitud,
      _token:   csrf,
    };


    $.post(ruta, datosAEnviar, function(dataRecibida){
        console.log('DATA RECIBIDA:');
        console.log(dataRecibida);
        
        objetoRespuesta = dataRecibida;
        alertaMensaje(objetoRespuesta.titulo,objetoRespuesta.mensaje,objetoRespuesta.tipoWarning);
        
        updateTablas();

    });

  }


  function clickAceptar(codSolicitud){
    updateRecibida(true,codSolicitud);


  }
  function clickRechazar(codSolicitud){
    updateRecibida(false,codSolicitud);

  }

  function updateRecibida(aceptada,codSolicitud){
    var csrf = document.getElementsByName('_token')[0].value;


    ruta = "{{route('user.UpdateSolicitudRecibida')}}"
    var datosAEnviar = {
      codSolicitud:codSolicitud,
      state:aceptada,
      _token:   csrf,
    };


    $.post(ruta, datosAEnviar, function(dataRecibida){
        console.log('DATA RECIBIDA:');
        console.log(dataRecibida);
        
        objetoRespuesta = dataRecibida;
        alertaMensaje(objetoRespuesta.titulo,objetoRespuesta.mensaje,objetoRespuesta.tipoWarning);
        
        updateTablas();

    });

  }
</script>