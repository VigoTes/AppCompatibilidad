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
        Ver Sala {{$sala->codigoUnico}}
    </p>
</div>

    @include('Layout.MensajeEmergenteDatos')

 
    @csrf
    <div class="row">
        <div class="col-1"></div>
        <div class="col-5">
          <div class="card mx-2 h-100">
            <div class="card-header ui-sortable-handle" style="cursor: move;">
                <div class="d-flex flex-row">
                    <div class="">
                        <h3 class="card-title">
                            
                            <b>Dar</b>
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
                          <input type="range" class="slider" value="0" oninput="changeSliderDar(this.value,{{$LenId}})" id="slider_dar_{{$LenId}}" min="0" max="100" step="1">
                        </div>
                        <div class="col-2">
                          <span for="" class="puntaje_item" id="span_valor_dar_{{$LenId}}">
                            0
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                
                @endforeach 
                <div class="row mt-4">
                  <div class="col-12 text-right">
                    <div class="row">
                      <div class="col-10"></div>
                      <div class="col-2 text-center">
                        <span id="total_dar" class="puntaje_total">
                          0
                        </span>
                      </div>
                    </div>
                    
                  </div>
                </div>

 

            </div>
          </div>
        </div>
        <div class="col-5">

 
          <div class="card mx-2  h-100">
            <div class="card-header ui-sortable-handle" style="cursor: move;">
                <div class="d-flex flex-row">
                    <div class="">
                        <h3 class="card-title">
                            
                            <b>Recibir</b>
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
                        <input type="range" class="slider" value="0" oninput="changeSliderRecibir(this.value,{{$LenId}})" id="slider_recibir_{{$LenId}}" min="0" max="100" step="1">
                      </div>
                      <div class="col-2">
                        <span for="" class="puntaje_item" id="span_valor_recibir_{{$LenId}}">
                          0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              
              @endforeach 
              <div class="row mt-4">
                <div class="col-12 text-right">
                  <div class="row">
                    <div class="col-10"></div>
                    <div class="col-2 text-center">
                      <span id="total_recibir" class="puntaje_total">
                        0
                      </span>
                    </div>
                  </div>
                  
                </div>
              </div>


 

            </div>
          </div>



        </div>
       
        <div class="col-1"></div>
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


  var total_dar = 0;

  var puntajes = [];
  
  function mounted(){
    inicializarPuntajes();

  }

  function inicializarPuntajes(){
    for (let index = 0; index < listaLenguajes.length; index++) {
      const lenguaje = listaLenguajes[index];
      lenguaje.puntajeDar = 0;
      lenguaje.puntajeRecibir = 0;
      puntajes.push(lenguaje);
    }
  }
 
  
  function changeSliderDar(new_value,lenguaje_id,){
    var selected_leng = puntajes.find(e=> e.codLenguaje == lenguaje_id);
    selected_leng.puntajeDar = new_value;

    var acumulated_sum = getTotalDar();
    if(acumulated_sum >= 100){
      
      reajustarSlidersDar(lenguaje_id);
    }

    printLabels();
  }


  function changeSliderRecibir(new_value,lenguaje_id){
    var selected_leng = puntajes.find(e=> e.codLenguaje == lenguaje_id);
    selected_leng.puntajeRecibir = new_value;

    var acumulated_sum = getTotalRecibir();
    if(acumulated_sum >= 100){
      reajustarSlidersRecibir(lenguaje_id);
    }

    printLabels();
  }


  function reajustarSlidersDar(codLenguajeNoBajar){
    
    var exceso_total = Math.abs(getTotalDar() - 100);
    var exceso_pendiente = exceso_total;

    /* aveces unslider no tiene suficiente para bajarlo todo y quedaria en negativo, entonces debemos agarrar de varios  */
    while(exceso_pendiente > 0){
      var codLenguajeBajarSlider = getCodLenguajeAptoParaDisminuirlo_Dar(codLenguajeNoBajar);
      selected_leng = puntajes.find(e=> e.codLenguaje == codLenguajeBajarSlider);
      var exceso_a_bajar = 0;
      
      if(selected_leng.puntajeDar > exceso_pendiente){ //alcanza con este
        exceso_a_bajar = exceso_pendiente;
        exceso_pendiente = 0;
      }else{
        exceso_a_bajar = selected_leng.puntajeDar;
        exceso_pendiente = exceso_pendiente - exceso_a_bajar;
      }

      document.getElementById('slider_dar_' + codLenguajeBajarSlider).value = selected_leng.puntajeDar - exceso_a_bajar;
      selected_leng.puntajeDar = selected_leng.puntajeDar - exceso_a_bajar;
    }
    
  } 

  function reajustarSlidersRecibir(codLenguajeNoBajar){
    
    var exceso_total = Math.abs(getTotalRecibir() - 100);
    var exceso_pendiente = exceso_total;

    /* aveces unslider no tiene suficiente para bajarlo todo y quedaria en negativo, entonces debemos agarrar de varios  */
    while(exceso_pendiente > 0){
      var codLenguajeBajarSlider = getCodLenguajeAptoParaDisminuirlo_Recibir(codLenguajeNoBajar);
      selected_leng = puntajes.find(e=> e.codLenguaje == codLenguajeBajarSlider);
      var exceso_a_bajar = 0;
      
      if(selected_leng.puntajeRecibir > exceso_pendiente){ //alcanza con este
        exceso_a_bajar = exceso_pendiente;
        exceso_pendiente = 0;
      }else{
        exceso_a_bajar = selected_leng.puntajeRecibir;
        exceso_pendiente = exceso_pendiente - exceso_a_bajar;
      }

      document.getElementById('slider_recibir_' + codLenguajeBajarSlider).value = selected_leng.puntajeRecibir - exceso_a_bajar;
      selected_leng.puntajeRecibir = selected_leng.puntajeRecibir - exceso_a_bajar;
    }
    
  } 


  /* retorna el id de un lenguaje del amor que no esté en 0 y que no esa el pasado por parametro */
  function getCodLenguajeAptoParaDisminuirlo_Dar(codLenguajeEsteNo){
    
    for (let index = 0; index < puntajes.length; index++) {
      const lenguaje = puntajes[index];
      if(lenguaje.codLenguaje != codLenguajeEsteNo && lenguaje.puntajeDar > 0 )
        return lenguaje.codLenguaje;

    }

  }
  function getCodLenguajeAptoParaDisminuirlo_Recibir(codLenguajeEsteNo){
    
    for (let index = 0; index < puntajes.length; index++) {
      const lenguaje = puntajes[index];
      if(lenguaje.codLenguaje != codLenguajeEsteNo && lenguaje.puntajeRecibir > 0 )
        return lenguaje.codLenguaje;

    }

  }

  function getTotalDar(){
    var sum = 0;
    for (let index = 0; index < puntajes.length; index++) {
      sum+=parseInt(puntajes[index].puntajeDar);
    }
  
    return sum;
  }
  function getTotalRecibir(){
    var sum = 0;
    for (let index = 0; index < puntajes.length; index++) {
      sum+=parseInt(puntajes[index].puntajeRecibir);
    }
  
    return sum;
  }


  function printLabels(){

    for (let index = 0; index < puntajes.length; index++) {
      const ptje = puntajes[index];
      document.getElementById('span_valor_dar_' + ptje.codLenguaje).innerHTML = ptje.puntajeDar;
      document.getElementById('span_valor_recibir_' + ptje.codLenguaje).innerHTML = ptje.puntajeRecibir;
      
    }

    document.getElementById('total_dar').innerHTML = getTotalDar();
    document.getElementById('total_recibir').innerHTML = getTotalRecibir();
    

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
  .puntaje_total{
    color: #ffffff;
    background-color: #3132b3;
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


  .jugador-no-llenado{
    background-color: #ededed;
    color: #4f8b67;
    font-weight: 500;
    font-size: 20pt;
  }


</style>
@endsection
