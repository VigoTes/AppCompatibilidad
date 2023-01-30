@extends ('Layout.Plantilla')
@section('titulo')
  Listar Ventas
@endsection

@section('contenido')
@php

   

  $comp_filtros = new App\UI\UIFiltros(false,$filtros_usados);

  $comp_filtros->añadirFiltro([
    'name'=>'codigo',
    'label'=>'Código:',
    'show_label'=>true,
    'placeholder'=>'Buscar por código de venta',
    'type'=>'text',
    'function'=>'contains',
    'options'=>[],
    'options_label_field'=>'nombreYcod',
    'options_id_field'=>null,
    'size'=>'sm',
    'max_width'=>'250px',
  ]); 

 

  $comp_filtros->añadirFiltro([
    'name'=>'fechaHora',
    'label'=>'Fecha ',
    'show_label'=>true,
    'placeholder'=>'',
    'type'=>'date_interval',
    'function'=>'between_dates',
    'options'=>[],
    'options_label_field'=>'nombre',
    'options_id_field'=>null,
    'size'=>'sm',
    'max_width'=>'250px',
  ]); 


  $comp_filtros->añadirFiltro([
    'name'=>'codMetodo',
    'label'=>'Método de pago',
    'show_label'=>true,
    'placeholder'=>'- Método de Pago -',
    'type'=>'select',
    'function'=>'equals',
    'options'=>$listaMetodosPago,
    'options_id_field'=>null,
    'options_label_field'=>'nombre',
    
    'size'=>'sm',
    'max_width'=>'250px',
  ]); 

  $comp_filtros->añadirFiltro([
    'name'=>'codUsuarioCajero',
    'label'=>'Cajero',
    'show_label'=>true,
    'placeholder'=>'- Cajero -',
    'type'=>'select2',
    'function'=>'equals',
    'options'=>$listaUsuarios,
    'options_id_field'=>null,
    'options_label_field'=>'getNombreCompleto',
    
    'size'=>'sm',
    'max_width'=>'250px',
  ]); 

  $comp_filtros->añadirFiltro([
    'name'=>'codUsuarioComprador',
    'label'=>'Cliente',
    'show_label'=>true,
    'placeholder'=>'- Cliente -',
    'type'=>'select2',
    'function'=>'equals',
    'options'=>$listaUsuarios,
    'options_id_field'=>null,
    'options_label_field'=>'getNombreCompleto',
    
    'size'=>'sm',
    'max_width'=>'250px',
  ]); 

  $comp_filtros->añadirFiltro([
    'name'=>'codFuncion',
    'label'=>'Función',
    'show_label'=>true,
    'placeholder'=>'- Función -',
    'type'=>'select2',
    'function'=>'equals',
    'options'=>$listaFunciones,
    'options_id_field'=>null,
    'options_label_field'=>'getDescripcion',
    
    'size'=>'sm',
    'max_width'=>'250px',
  ]); 

@endphp
 
<div style="">
  <div class="text-center">
    <h2>
      Listar Ventas
    </h2>
  </div>


    <div class="row">
        <div class="text-left mx-4">
            <a href="{{route("Ventas.Crear")}}" class="btn btn-primary" style=" "> 
            <i class="fas fa-plus"> </i> 
                Registrar Venta
            </a>
        </div>
        <div class="col-md-10">
            
        </div>
    </div>
    <div class="row">
      <div class="col-12">
        {{$comp_filtros->render()}}
      </div>
    </div>
    
    @include('Layout.MensajeEmergenteDatos')

    <div class="text-right p-1">
      @include('ComponentesUI.DownloadButton')
    </div>
    
    <table class="table table-sm" style="font-size: 10pt;  ">
        <thead class="thead-dark">
          <tr>
            <th>Id</th>
            <th>Comprador</th>
            <th>Fecha hora</th>
            <th>
              Función
            </th>
            <th>Cajero</th>
            <th>Total</th>

            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        
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
            <td>
              <a href="{{route('Ventas.Ver',$venta->getId())}}" class="btn btn-primary btn-xs">
                <i class="fas fa-eye"></i>
              </a>
              <a href="{{route("Ventas.Editar",$venta->getId())}}" class="btn btn-warning btn-xs btn-icon icon-left">
                <i class="fas fa-edit"></i>
              </a>
            </td>
          </tr>
        @endforeach
      </tbody>
    </table>
    {{$listaVentas->appends($filtros_usados_paginacion)->links()}}
</div>
  

@endsection