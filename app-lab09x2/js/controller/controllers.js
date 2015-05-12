angular
		.module("laboratorio09App")
		.controller(
				"listaTareasCtrl",
				[
						'$scope',
						'$location',
						'$http',
						'buscarTareaFactory',
						'$sce',
						'tareasDAO',						
						function($scope, $location,$http,buscarTareaFactory,$sce,tareasDAO) {
							 $scope.cargar=function(){
								 $scope.listaTareas = tareasDAO.getListaTareas();
							 } 
							$scope.destacar = function(tarea) {
								tarea.destacar= !tarea.destacar;
								tareasDAO.actualizarTarea(tarea);
							};
							$scope.finalizar = function(unaTarea) {
								tarea.finalizar= !tarea.finalizar;
								tareasDAO.actualizarTarea(tarea);
							};
							$scope.nuevaTarea = function() {
								$location.path("/tarea/add");
							}
						} ])
						.controller("editTareaCtrl",
				[ '$scope', '$routeParams', function($scope, $routeParams) {
					$http.get("http://localhost:3000/tareas/"+id).then(
							function(response){
								$scope.unaTarea = response.data;
							});
							
				} ]);