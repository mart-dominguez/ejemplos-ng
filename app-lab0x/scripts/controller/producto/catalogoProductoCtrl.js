angular.module('appVentas')
.controller('CatalogoCtrl',
		['$scope','$location',
		 function($scope,  $location) {
			$scope.titulo = "Catalogo de productos";
		}]);
