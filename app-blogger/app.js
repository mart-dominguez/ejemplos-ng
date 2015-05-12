angular.module('notasApp',['ngRoute']).config([ '$routeProvider', 
	function($routeProvider) {
		$routeProvider.when('posts', {
			controller : 'NotasController',
			templateUrl : 'views/listaNotas.html'						
		}).when('/posts/:id/:permalink', {
			controller : 'DetalleNotaController',
			templateUrl : 'views/nota.html'
		}).otherwise({redirectTo:'/posts'});
	} ]
);