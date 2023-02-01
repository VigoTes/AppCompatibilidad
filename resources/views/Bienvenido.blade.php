@extends('Layout.Plantilla')
@section('titulo')
    App de Compatibiliad
@endsection

@section('contenido')

<div class="text-center">
  <div class="row">
    <div class="col-sm-3"></div>
    <div class="col-sm-6">
     
      <h3>
        Mi gráfico de contactos
      </h3>
       
      <div id="cy" class="graph-container"></div>
      
    </div>
    <div class="col-sm-3"></div>
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
      width: 800px;
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
  document.addEventListener('DOMContentLoaded', function(){

    const NodeStyle = {
      'label': 'data(name)',
      'text-valign': 'center',
      'color': '#0000FF',
      'background-color': '#3a7ecf'
    };

    const ConectorStyle = {
      'width': 2,
      'line-color': '#3a7ecf',
      'opacity': 0.5,
      label:'data(value)'
    }


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

      elements: {
        nodes: [
          { data: { id: 'v1', name:"diego", weight: 1} },
          { data: { id: 'v2', name:"ernesto", weight: 2} },
          { data: { id: 'v3', name:"ingri", weight: 3} },
          { data: { id: 'v4', name:"cuack", weight: 4} },
          { data: { id: 'v5', name:"mau", weight: 5} },
          { data: { id: 'v6', name:"julio", weight: 6} },
          { data: { id: 'v7', name:"rodri", weight: 7} }
        ],
        edges: [
          
          { data: { source: 'v1', target: 'v4', directed: 'false', value:2} },
          { data: { source: 'v1', target: 'v5', directed: 'false', value:50} },
          { data: { source: 'v2', target: 'v4', directed: 'false', value:60} },
          { data: { source: 'v2', target: 'v6', directed: 'false', value:10} },
          { data: { source: 'v3', target: 'v4', directed: 'false', value:35} },
          { data: { source: 'v3', target: 'v7', directed: 'false', value:30} },
          { data: { source: 'v4', target: 'v5', directed: 'false', value:15} },
          { data: { source: 'v4', target: 'v7', directed: 'false', value:100} },
          { data: { source: 'v5', target: 'v6', directed: 'false', value:20} },
          { data: { source: 'v6', target: 'v7', directed: 'false', value:70} },
          { data: { source: 'v6', target: 'v3', directed: 'false', value:15} }
        ],
        
      }
    });
 

  });
</script>
@endsection