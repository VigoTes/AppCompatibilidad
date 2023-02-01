
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
    @forelse ($listaSolicitudesAmistadEnviadas as $solicitud)
      <tr>
        <td style = "padding: 0.50rem" class="">
          {{$solicitud->getUsuarioReceptor()->usuario}}
        </td>
        <td style = "padding: 0.50rem" class="">
          {{$solicitud->getFechaHoraEmision()}}
        </td>
        <td style = "padding: 0.50rem" class="">
          <button title="Cancelar" type="button" onclick="clickCancelarSolicitud({{$solicitud->getId()}})" class="btn btn-danger btn-sm" href="">
            <i class="fas fa-trash" ></i>
          </button>
        </td>
        
      </tr>
    @empty
      <tr>
        <td class="text-center" colspan="3">
          No hay solicitudes
        </td>      
      </tr>

    @endforelse
 
  
  </table>