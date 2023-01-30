@extends('Layout.Plantilla')

@section('titulo')
  Crear Película
@endsection

@section('tiempoEspera')
 
@endsection

@section('contenido')

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<div >
    <p class="h2" style="text-align: center">
        Ver Sala
    </p>
</div>

    @include('Layout.MensajeEmergenteDatos')

 
    @csrf
    <div class="row">
      
      @foreach ($jugadores as $jugador)
        
        <div class="col-6">
          <div class="card mx-2">
            <div class="card-header ui-sortable-handle" style="cursor: move;">
                <div class="d-flex flex-row">
                    <div class="">
                        <h3 class="card-title">
                            
                            <b>Jugador B</b>
                        </h3>

                    </div>

                  

                </div>
            </div>
            <div class="card-body">

                @foreach ($listaLenguajes as $lenguaje)
                  @php
                    $LenId = $lenguaje->getId();
                  @endphp
                  <div class="row">
                    <div class="col text-center">
                      <div class="row">
                        <div class="col-12 text-left pb-1">
                          <span class="lenguaje_nombre">
                            {{$lenguaje->nombreAparente}}
                          </span>
                        </div>
                        <div class="col-10">
                          <input type="range" class="slider" value="0" oninput="changeSlider(this.value,{{$LenId}},'{{$jugador}}')" id="" min="0" max="100" step="1">
                        </div>
                        <div class="col-2">
                          <span for="" class="puntaje_item" id="span_valor_{{$LenId}}_{{$jugador}}">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                
                @endforeach



                <div class="row">
                    <div class="ml-auto m-1">

                        <button type="button" class="btn btn-primary"  data-loading-text="<i class='fa a-spinner fa-spin'></i> Registrando"
                            onclick="clickGuardar()">
                            <i class='fas fa-save'></i>
                            Guardar
                        </button>

                    </div>

                </div>

            </div>
          </div>
        </div>
      
      @endforeach  
    </div>
      
 
    <div class="d-flex flex-row m-4">
        <div class="">

            <a href="{{route('SalaDupla.Listar')}}" class='btn btn-info '>
                <i class="fas fa-arrow-left"></i>
                Regresar al Menú
            </a>

        </div>


    </div>



 


@endsection

{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}
{{-- ************************************************************************************************************* --}}

<script src="//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js"></script>

@include('Layout.EstilosPegados')
@include('Layout.ValidatorJS')
@section('script')

<script type="application/javascript">
  

  document.addEventListener('DOMContentLoaded', mounted, false);

  var listaLenguajes = @json($listaLenguajes)


  var total_acumulado = 0;

  var puntajesA = [];
  var puntajesB = [];
  

  function mounted(){
    inicializarPuntajes();

  }

  function inicializarPuntajes(){
    for (let index = 0; index < listaLenguajes.length; index++) {
      const lenguaje = listaLenguajes[index];
      lenguaje.value = 0;

      puntajesA.push(lenguaje);
      puntajesB.push(lenguaje);

    }
  }
 
  
  function changeSlider(new_value,lenguaje_id,jugador){
    var selected_leng;
    if(jugador=="A"){
      selected_leng = puntajesA.find(e=> e.codLenguaje == lenguaje_id);
    }else{
      selected_leng = puntajesB.find(e=> e.codLenguaje == lenguaje_id);
    }
    selected_leng.value = new_value;
    
    printLabels();
  }


  function printLabels(){
    for (let index = 0; index < puntajesA.length; index++) {
      const element = puntajesA[index];
      document.getElementById('span_valor_' + element.codLenguaje + "_A").innerHTML = element.value;
    }

    for (let index = 0; index < puntajesB.length; index++) {
      const element = puntajesB[index];
      document.getElementById('span_valor_' + element.codLenguaje + "_B").innerHTML = element.value;
    }
    

  }


</script>
 
@endsection
@section('estilos')
<style>
  .puntaje_item{
    color: #ffffff;
    background-color: #04AA6D;
    border-radius: 19px;
    padding: 8px 10px;
    font-weight: 700;

  }

  .lenguaje_nombre{
    font-size: 14pt;
    
  }

  .cursorPointer{
    cursor:pointer;
  }


  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;  
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    margin-top: 5px;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%; 
    background: #04AA6D;
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04AA6D;
    cursor: pointer;
  }


</style>
@endsection
