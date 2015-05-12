var listaTareasAux = [ 
{
	 id:1,
	 titulo: "TAREA 1",
	 detalle: "detalle tarea 1"
},{
	 id:2,
	 titulo: "TAREA 2",
	 detalle: "detalle tarea 2"
 },{
	 id:3,
	 titulo: "TAREA 3",
	 detalle: "detalle tarea 3"
 },{
	 id:4,
	 titulo: "TAREA 4",
	 detalle: "detalle tarea 4"
 },{
	 id:5,
	 titulo: "TAREA 5",
	 detalle: "detalle tarea 5"
 }]
 
angular.module("laboratorio08")
	.controller("listaTareasCtrl",['$scope', function($scope){
		$scope.listaTareas=listaTareasAux;		                     
	}]
);