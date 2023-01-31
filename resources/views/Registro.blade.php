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

      <div class="card mt-3">
        <div class="card-header text-left d-flex flex-column">
          <h2 class=" titulo-card my-auto">
            Regístrate
          </h2>
        </div>
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
<style>
  .step-circle{

    border-radius: 200px;
    width: 50px;
    height: 50px;
    text-align: center;
    padding-top: 8px;
    font-weight: 700; 
    
     
  }

  .line{
    border-top: 5px solid #90dae9;
    height: 2px;
    max-width: 200px;
    padding: 0;
    margin-top: 22px;
    
  }

  /* sm */
  @media (max-width: 600px) {
    .line{
      width: 50px;
    }
  }
  @media (max-width: 900px) {
    .line{
      width: 100px;
    }
  }
  @media (min-width: 900px) {
    .line{
      width: 189px;
    }
  }


  .step-circle.active{
    background-color: #0090ad;
    color: white;
  }
  .step-circle.not-active{
    background-color: #90dae9;
    color: #7a7b83;
    
  }

  .titulo-card{
    font-size: 17pt;
    font-weight: 800;
    color: #4a4a4a;
  }

</style>
@endsection