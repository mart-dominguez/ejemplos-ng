angular.module('notasApp')
.controller('NotasController',[ '$scope', 'notasService', 
       function($scope, notasService) {
			console.log("CONTROLADOR NOTAS");
			$scope.getAllPosts = function() {
				return  notasService.getAll();
			};
			$scope.posts = $scope.getAllPosts();
		} ])
.controller('DetalleNotaController',[ '$routeParams', '$scope', '$location','notasService',
		function($routeParams, $scope, $location,notasService) {
			$scope.getPostById = function(id) {
				return notasService.getPostById(id);
			};
			$scope.closePost = function() {
				$location.path('allPosts');
			};
			$scope.singlePost = $scope.getPostById($routeParams.id);
		} ]);