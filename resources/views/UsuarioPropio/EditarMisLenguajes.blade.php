@extends('Layout.Plantilla')
@section('titulo')
    App de Compatibiliad
@endsection

@section('contenido')

<div class="text-center">
  <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">

      <div class="step-title">
        Edita tus lenguajes de amor
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