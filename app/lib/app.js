angular.module("laboratorio07",[])
	.controller("miController",function($scope){
		$scope.valorTest = 4+96;		
		$scope.mitadValor = $scope.valorTest/2;	
		$scope.aplicarEstilo1 = $scope.mitadValor %2 ==0;
		$scope.indice = 1;
		$scope.historial = [{
						valor:$scope.mitadValor,
						indice: $scope.indice
					}];
		$scope.refrescar = function(){
			$scope.valorTest += Math.random()*100;
			$scope.mitadValor = $scope.valorTest/2;
			$scope.aplicarEstilo1 = Math.floor($scope.mitadValor) %2 ==0;
			$scope.indice++;
			$scope.historial.push({
				valor: $scope.mitadValor,
				indice: $scope.indice
			});
			console.log($scope.historial);
		}
	}
);