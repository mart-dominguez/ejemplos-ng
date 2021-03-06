angular.module("laboratorio09App",[ 'ngRoute','ngSanitize','ngResource'])
.config(function($routeProvider) {
	$routeProvider.when('/tareas', {
		controller : 'listaTareasCtrl',
		templateUrl : 'vistas/listaTareas.html'
	}).when('/tarea/add', {
		controller : 'addTareaCtrl',
		templateUrl : 'vistas/datosTarea.html'
	}).when('/tarea/editar/:id', {
		controller : 'editTareaCtrl',
		templateUrl : 'vistas/datosTarea.html'
	}).
	otherwise(
			{
		        redirectTo: '/tareas'
			}
	);
	
});
