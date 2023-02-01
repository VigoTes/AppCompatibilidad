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
          <h3 class="step-circle active">
            2
          </h3>
          <div class="line"></div>
          <h3 class="step-circle not-active mr-auto">
            3
          </h3>
        
      </div>
      <div class="step-title">
        Ingresa tus lenguajes de amor
      </div>
      
      
      @include('Reusables.MisLenguajes')


    </div>
    <div class="col-sm-3"></div>
  </div>


</div>
  
 
@endsection
 
@section('estilos')
  @include('Reusables.EstilosPasos')
@endsection