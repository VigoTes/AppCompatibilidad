@extends('Layout.Plantilla')
@section('titulo')
    App de Compatibiliad
@endsection

@section('contenido')

<div class="text-center">
  <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">


      <div class="mb-3">
        <h2 class="">
          Compatibilidad según lenguajes del amor
        </h2>
      </div>
      
      <div class="text-center  d-flex">

          <h3 class="step-circle not-active ml-auto">
            1
          </h3>
          <div class="line"></div>
          <h3 class="step-circle not-active">
            2
          </h3>
          <div class="line"></div>
          <h3 class="step-circle active mr-auto">
            3
          </h3>
        
      </div>
      <div class="step-title">
        Envía este link a uno de tus amigos
        <br> 
        ¡Una vez que se registre podrán ver su compatibilidad!
      </div>

      <div class="d-flex mt-3">
        <div class="ml-auto contenedor-link-referido d-flex">
          <span class="my-auto m-3 link-referido ">
            {{$usuario->getLinkReferido()}}
          </span>
        </div>
        
        <div class="mr-auto ">
          <button type="button" onclick="copiar()" class="btn btn-primary ">
            Copiar
            <i class="ml-1 fas fa-copy"></i>
          </button>
        </div>

      </div>
      

    </div>
    <div class="col-sm-3"></div>
  </div>


</div>
  
 
@endsection
 
@section('estilos')
@include('Reusables.EstilosPasos')
@endsection

<style>
  .contenedor-link-referido{
    background-color: #dbe8f3;
    color: #bb3636;
    padding: 5px;
    border-radius: 12px;
    font-weight: 800;

  }
  .link-referido{

  }

</style>

<script>

  const COPY_URL = "{{$usuario->getLinkReferido()}}";


  function copiar(){
    navigator.clipboard.writeText(COPY_URL);

    alertaMensaje("¡Listo!","Link copiado al portapapeles","success")
    
  }
</script>