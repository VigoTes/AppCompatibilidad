@extends('Layout.Plantilla')
@section('titulo')
    App de Compatibiliad
@endsection

@section('contenido')

<div class="text-center">
  <div class="row">
 
    <div class="col-sm-12">
     
      <h3>
        Mi gráfico de contactos
      </h3>
       
      <div id="cy" class="graph-container"></div>
      
    </div>
    
  </div>


</div>
  
 
@endsection

@section('estilos')
<style>
    .graph-container{
      background-color: #dee3eb;
      padding: 5px;
      border-radius: 10px;
      border-color: #e7e7e7;
      border-width: 5px;
      border-style: solid;
    }

    #cy {
   
      height: 600px;
      text-align: left;
    }

  
			  

  
  .line {
    clear:left;
    height:25px;
    margin-top:6px;
    margin-right:6px;
    margin-bottom:6px;
  }

  .radio {
    margin-left:25px;
  }

  .lalala{
    color:aqua;
  }

</style>
@endsection

@section('script')
<script src="/js/cytoscape.min.js"></script>
<script src="/js/graph.js"></script>

{{-- https://js.cytoscape.org/ --}}
{{-- https://ivis-at-bilkent.github.io/cytoscape.js-avsdf/ --}}
<script>
  const GraphData = @json($data);


  const NodeStyle = {
      'label': 'data(usuario)',
      'text-valign': 'center',
      'color': '#0000FF',
      'background-color': '#3a7ecf'
    };

    const ConectorStyle = {
      'width': 2,
      'line-color': 'data(color)',
      'opacity': 'data(opacity)',
      label:'data(value)'
    }


  document.addEventListener('DOMContentLoaded', function(){

    

    var cy = window.cy = cytoscape({
      container: document.getElementById('cy'),

      layout: {
        name: 'avsdf',
        nodeSeparation: 120
      },

      style: [
        {
          selector: 'node',
          style: NodeStyle,
          
        },
        {
          selector: 'edge',
          style: ConectorStyle
        },
         

      ],

      elements: GraphData
    });
 

  });
</script>
@endsection