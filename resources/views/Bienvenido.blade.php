@extends('Layout.Plantilla')
@section('titulo')
    App de Compatibiliad
@endsection

@section('contenido')

<div class="text-center">
  <div class="row">
    <div class="col-sm-3"></div>
    
    <div class="col-sm-3"></div>
  </div>


</div>
  
 
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