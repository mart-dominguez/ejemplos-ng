var listaTareasAux = [ 
{
	 id:1,
	 titulo: "TAREA 1",
	 detalle: "detalle tarea 1",
	 mostrar: false,
	 destacar: false
},{
	 id:2,
	 titulo: "TAREA 2",
	 detalle: "detalle tarea 2",
	 mostrar: true,
	 destacar: false
 },{
	 id:3,
	 titulo: "TAREA 3",
	 detalle: "detalle tarea 3",
	 mostrar: true,
	 destacar: false
 },{
	 id:4,
	 titulo: "TAREA 4",
	 detalle: "detalle tarea 4",
	 mostrar: true,
	 destacar: false
 },{
	 id:5,
	 titulo: "TAREA 5",
	 detalle: "detalle tarea 5",
	 mostrar: true,
	 destacar: true
 }];
 
angular.module("laboratorio08App")
.controller("listaTareasCtrl",['$scope','$location', function($scope,$location){
	$scope.listaTareas=listaTareasAux;		     
	$scope.destacar = function(id){ 
		listaTareasAux.forEach(function(element, index, array){
			console.log(id);
			console.log(element);
			console.log(index);
			if(element.id == id){				
				console.log(listaTareasAux[index].destacar+"-"+element.destacar);
				listaTareasAux[index].destacar = !element.destacar;
				console.log(listaTareasAux[index].destacar+"-"+element.destacar);
			}
		});
		console.log(listaTareasAux);

	};
	$scope.finalizar = function(unaTarea){ 

	};
	$scope.nuevaTarea = function(){
		  $location.path("/tarea/add");
	}
}]
).controller("addTareaCtrl",['$scope','$location', function($scope,$location){	
$scope.unaTarea={};
$scope.agregarTarea=function(){
	console.log($scope.unaTarea);
	$scope.unaTarea.mostrar= true;
	$scope.unaTarea.destacar= false;
	listaTareasAux.push($scope.unaTarea);
	console.log(listaTareasAux);
	$location.path("/tareas");
}

}]
).controller("editTareaCtrl",['$scope','$routeParams', function($scope,$routeParams){
$scope.unaTarea="una tarea";		                     
}]
);