@extends('Layout.Plantilla')
@section('titulo')
    App de Compatibiliad
@endsection

 
@include('Reusables.Loader')


@section('contenido')

<div class="text-center">
  <div class="row">
    <div class="col-lg-1"></div>
    <div class="col-lg-10 col-12">

      <div class="step-title">
        Edita tus lenguajes de amor
      </div>
      
      @include('Reusables.MisLenguajes')


    </div>
    <div class="col-lg-1"></div>
  </div>


</div>
  
 
@endsection
 
@section('estilos')
  @include('Reusables.EstilosPasos')
@endsection

<script>

  document.addEventListener('DOMContentLoaded', function(){
    $(".loader").hide();
  }, false);
  

</script>