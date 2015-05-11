angular.module('appVentas', ['ngRoute']).config(function($routeProvider) {
	$routeProvider.when('/inicial', {
		controller : 'CatalogoCtrl',
		templateUrl : 'vistas/catalogoProducto.html'
	}).when('/add', {
		controller : 'AddProductoCtrl',
		templateUrl : 'vistas/datosProducto.html'
	}).otherwise({
			redirectTo: "/inicial"
	});
});