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
			$scope.listaTareas.forEach(function(element, index, array){
				if(element.id == id){				
					$scope.listaTareas[index].destacar = !element.destacar;
				}
			});
		};
		$scope.finalizar = function(unaTarea){ 
			$scope.listaTareas.forEach(function(element, index, array){
				if(element.id == id){				
					$scope.listaTareas[index].mostrar = !element.mostrar;
				}
			});
		};
		
		$scope.nuevaTarea = function(){
			$location.path("/tarea/add");
		};
		$scope.editarTarea= function(id){
			$location.path("/tarea/editar/"+id);
		};		
	}]
).controller("addTareaCtrl",['$scope','$location', function($scope,$location){	
	$scope.unaTarea={};
	$scope.agregarTarea=function(){
		$scope.unaTarea.mostrar= true;
		$scope.unaTarea.destacar= false;
		listaTareasAux.push($scope.unaTarea);
		$location.path("/lista");
	}
}]
).controller("editTareaCtrl",['$scope','$routeParams', '$location',function($scope,$routeParams,$location){
	listaTareasAux.forEach(function(element, index, array){
		if(element.id == $routeParams.id){				
			$scope.unaTarea = element;
		}
	});
	$scope.agregarTarea=function(){
		listaTareasAux.forEach(function(element, index, array){
			if(element.id == $scope.unaTarea.id){				
				listaTareasAux[index] = $scope.unaTarea;
			}
		});
		$location.path("/lista");

	}
}]
);