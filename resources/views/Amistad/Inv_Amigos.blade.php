<table class="table table-bordered table-condensed table-hover" >
  <tr>
    <td class="cabecera">
      Mis Amigos
    </td>
    <td class="cabecera">
      Indice
    </td>
  </tr>
  @forelse ($listaAmigos as $amigo)
    <tr>
      <td style = "padding: 0.50rem" class="">
        {{$amigo->usuario}}
      </td>
      <td style = "padding: 0.50rem" class="">
        {{$amigo->getIndiceCompatibilidad($usuario->codUsuario)}}
      </td>
      
    </tr>

  @empty
    <tr>
      <td class="text-center" colspan="3">
        No tienes amigos.
      </td>

    </tr>
  @endforelse

</table>

