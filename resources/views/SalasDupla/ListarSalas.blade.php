@extends ('Layout.Plantilla')
@section('titulo')
  Listar Productos
@endsection

@section('contenido')
 
<div style="text-align: center">
    <h2>
      Listar Salas
    </h2>
    <br>
    
    <div class="row">
        <div class="text-left m-2">
            <a href="{{route('SalaDupla.CrearNueva')}}" class="btn btn-primary" style=" "> 
              <i class="fas fa-plus"> </i> 
              Nueva Sala
            </a>
        </div>

        <div class="col-md-10">
            
        </div>
    </div>
    
    @include('Layout.MensajeEmergenteDatos')
    
    <table class="table table-sm table-hover">
        <thead class="thead-dark">
          <tr>
            <th>Id</th>
            <th>Jugador A</th>
            <th>Jugador B</th>
            <th>Indice</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        
        @foreach($listaSalas as $sala)
          <tr>
            <td>
              {{$sala->getId()}}
            </td>
            <td>
              
              {{$sala->getUsuarioA()->usuario}}
   
            </td>
            <td>
              {{$sala->getUsuarioB()->usuario}}
            </td>
            <td>
              {{$sala->indiceObtenido}}
            </td>
            
            <td>
              <a href="{{route('SalaDupla.Ver',$sala->codigoUnico)}}" class="btn btn-warning btn-xs btn-icon icon-left">
                <i class="fas fa-eye"></i>
              </a>
            </td>
          </tr>
        @endforeach
      </tbody>
    </table>
 
</div>
@endsection

@section('script')

@include('Layout.ValidatorJS')

<script>

   
  
</script>

@endsection