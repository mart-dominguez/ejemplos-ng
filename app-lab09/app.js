angular.module('appRuleta',[]).controller("RuletaCtrl",
		['$scope','ruletaFactory','$interval', function($scope,ruletaFactory,$interval){
				$scope.tablero = ruletaFactory.getTablero();
				$scope.apostar = function(){ alert('apuesto');}
				$scope.sortear = function(){
					$scope.nroSorteado = Math.floor((Math.random() * 36));
					console.log("nro sorteado"+$scope.nroSorteado);
				}
				$scope.iniciarSorteo = function(){
					console.log("iniciar sorteo");
					$interval( function(){ $scope.sortear(); }, 1000,10);
				}
		}]);