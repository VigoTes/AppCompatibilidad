

{{-- 
  Este mini componente
  Remplaza de la url actual el listar por descargar, por lo que en el web se debe controlar una nueva ruta y funcion en en el controller que lo manejen
  
  --}}

  <button class="btn btn-sm btn-success" title="Exportar en excel" onclick="clickExportarExcel()">
    Descargar registros
    <i class="ml-1 fas fa-file-excel">
      
    </i>
  </button>
  

<script>

  function clickExportarExcel(){

    var actual_url = window.location.href;
    var download_url = actual_url.replaceAll("listar",'Descargar')
    var download_url = actual_url.replaceAll("Listar",'Descargar')
    
    console.log(download_url);
  
    window.open(download_url, '_blank');
  }

</script>