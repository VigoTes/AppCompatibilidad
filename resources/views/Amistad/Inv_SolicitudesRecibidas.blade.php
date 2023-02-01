<table class="table table-bordered table-condensed table-hover" >
  <tr>
    <td class="cabecera">
      Usuario
    </td>
    <td class="cabecera">
      Fecha y Hora
    </td>
    <td class="cabecera">
      Opciones
    </td>
  </tr>
  @forelse ($listaSolicitudesAmistadRecibidas as $solicitud)
    <tr>
      <td style = "padding: 0.50rem" class="">
        {{$solicitud->getUsuarioEmisor()->usuario}}
      </td>
      <td style = "padding: 0.50rem" class="">
        {{$solicitud->getFechaHoraEmision()}}
      </td>
      <td style = "padding: 0.50rem" class="">
        
        <button  type="button" onclick="clickAceptar({{$solicitud->getId()}})" class="btn btn-primary btn-sm" href="">
          <i class="fas fa-thumbs-up" title="Aceptar"></i>
        </button>
        <button class="btn btn-danger btn-sm" type="button" onclick="clickRechazar({{$solicitud->getId()}})">
          <i class="fas fa-thumbs-down" title="Aceptar"></i>
        </button>
        
      </td>
      
    </tr>
  @empty
    <tr>
      <td class="text-center" colspan="3">
        No tienes solicitudes pendientes.
      </td>      
    </tr>
  @endforelse

</table>
