<?php 

$descargarExcel = true;
$filename = "hola.xlsx";

$fondoPlomo = "background-color: #D0CECE;";

$filename = "Reporte de Ventas Caja.xls";

if($descargarExcel){
  header("Pragma: public");
  header("Expires: 0");
  
  header("Content-type: application/vnd.ms-excel");
  header("Content-Disposition: attachment; filename=$filename");
  header("Pragma: no-cache");
  
}

$filtro_fecha = "-";
if(array_key_exists('fechaHora',$filtros_usados)){
  $array = explode(",",$filtros_usados['fechaHora']);
  $filtro_fecha = $array[0]." hasta ". $array[1];
}

$filtro_metodo = "-";
if(array_key_exists('codMetodo',$filtros_usados)){
  $metodo = App\MetodoPago::findOrFail($filtros_usados['codMetodo']);
  $filtro_metodo = $metodo->nombre;
}

$filtro_cajero = "-";
if(array_key_exists('codUsuarioCajero',$filtros_usados)){
  $cajero = App\Usuario::findOrFail($filtros_usados['codUsuarioCajero']);
  $filtro_cajero = $cajero->getNombreCompleto();
}

$filtro_comprador = "-";
if(array_key_exists('codUsuarioComprador',$filtros_usados)){
  $comprador = App\Usuario::findOrFail($filtros_usados['codUsuarioComprador']);
  $filtro_comprador = $comprador->getNombreCompleto();
}

$filtro_funcion = "-";
if(array_key_exists('codFuncion',$filtros_usados)){
  $funcion = App\Funcion::findOrFail($filtros_usados['codFuncion']);
  $filtro_funcion = $funcion->getDescripcion();
}




?>
<meta charset="utf-8">

<table  border="1">
  <thead class="">
      <tr>
          <th colspan="4" style="font-size: large">
            Reporte de ventas en Caja:
          </th>
      </tr>

      <tr>
        <th colspan="2">
          Filtros usados en el reporte:
        </th>
      </tr>
      <tr>
        <th>
          Fecha:
        </th>
        <th colspan="3">
          {{$filtro_fecha}}
        </th>
      </tr>
      <tr>
        <th>
          Método de Pago:
        </th>
        <th colspan="3">
          {{$filtro_metodo}}
        </th>
      </tr>
      <tr>
        <th>
          Cajero:
        </th>
        <th colspan="3">
          {{$filtro_cajero}}
        </th>
      </tr>
      <tr>
        <th>
          Cliente:
        </th>
        <th colspan="3">
          {{$filtro_comprador}}
        </th>
      </tr>
      <tr>
        <th>
          Función:
        </th>
        <th colspan="3">
          {{$filtro_funcion}}
        </th>
      </tr>
      

  </thead>
  <tbody>
      
  </tbody>
</table>
<br>

<table  border="1">
    <thead>                  
    <tr>
        <th style="{{$fondoPlomo}}">Codigo</th>
        <th style="{{$fondoPlomo}}">Comprador</th>
        <th style="{{$fondoPlomo}}">Fecha hora</th>
        
        <th style="{{$fondoPlomo}}">Función</th>
         
        <th style="{{$fondoPlomo}}">Cajero</th>
        <th style="{{$fondoPlomo}}">Total</th>
        
        
  
    </tr>
    </thead>
    <tbody>
    @php
        $i=1;
    @endphp
    @foreach($listaVentas as $venta)
        <tr>
            <td>
                {{$venta->codigo}}
            </td>
            <td>
              @if(!$venta->esVentaAnonima())
                {{$venta->getUsuarioComprador()->getNombreCompleto()}}

              @else
                Venta Anónima
              @endif
            </td>
            <td>
              {{$venta->getFechaHoraEscrita()}}
            </td>
 
            <td>
              @if($venta->tieneFuncion())
                {{$venta->getFuncion()->getDescripcion()}}
              @endif
              
            </td>
            <td>
              {{$venta->getUsuarioCajero()->getNombreCompleto()}}
            </td>
            <td>
              {{$venta->getTotal()}}
            </td>
           
           
        </tr>
        @php
            $i++;
        @endphp
    @endforeach
    
    </tbody>
</table>
    <br>

<table border="1">
    <tbody>
        <tr>
          <td>
            Reporte generado por el sistema gestion.cedepas.org el 
            {{App\Fecha::getFechaHoraActual()}} por
            {{App\Usuario::getLogeado()->getNombreCompleto()}}
          </td>

        </tr>
    </tbody>
</table>
