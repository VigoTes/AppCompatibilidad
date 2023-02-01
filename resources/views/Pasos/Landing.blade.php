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
       
      <div class="step-title">
        LANDING PAGE
      </div>

      <div class="text-center mt-3">
        
        
        <div class="mr-auto ">
          <a href="{{route('Flujo.VerPaso1')}}" class="btn btn-primary ">
            Empezar
            
          </a>
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

  
</script>