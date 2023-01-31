@extends('Layout.Plantilla')
@section('titulo')
    App de Compatibiliad
@endsection

@section('contenido')

<div class="text-center">
  <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">


      <div class="mb-5">
        <h2 class="">
          Compatibilidad según lenguajes del amor
        </h2>
      </div>
      
      <div class="text-center  d-flex">

          <h3 class="step-circle active ml-auto">
            1
          </h3>
          <div class="line"></div>
          <h3 class="step-circle not-active">
            2
          </h3>
          <div class="line"></div>
          <h3 class="step-circle not-active mr-auto">
            3
          </h3>
        
      </div>
      <div class="step-title">
        Registrate en nuestra plataforma
      </div>

      <div class="card mt-3">
        
        <div class="card-body">
          <form action="{{route('user.registrarUsuario')}}" method="POST" name="formRegistrar">
            @csrf
            <div class="row text-left" id="registerForm">
              
              <div class="col-12 col-sm-6">
                <label for="">
                  Usuario
                </label>
                <input type="text" id="usuario" name="usuario" class="form-control">
              </div>
              <div class="col-12 col-sm-6">
                <label for="">
                  Contraseña
                </label>
                <input type="password" id="password" name="password" class="form-control">
              </div>
              <div class="col-12 mt-3 text-right" >
                <button onclick="clickGuardar()"  type="button" class="btn btn-primary">
                  Siguiente
                  <i class=" fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

          </form>

          </div>
        </div>


    </div>
    <div class="col-sm-3"></div>
  </div>


</div>
  
 
@endsection
@section('script')
<script>
  function clickGuardar(){

    document.formRegistrar.submit();

  }


</script>
@endsection
@section('estilos')
@include('Reusables.EstilosPasos')
@endsection