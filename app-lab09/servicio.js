angular.module("appRuleta").factory('ruletaFactory', function() {
    var _tablero = [];
    var _iniciarTablero = 
    		function(){
    			for (var i = 0; i <= 36; i++) {
    				var colorNro = "negro";
    				if(i===0) colorNro = "cero"; 
    				else{ 
    					if([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36].indexOf(i) > -1) colorNro = "rojo";
    				}
    				_tablero[i]={
    				    valor:i,
    					apuesta:0,    		
    					color: "nro "+colorNro
    				}
    			} // fin del for    
    		};
    return {
    	getTablero : function(){
    		_iniciarTablero();
    		return _tablero;
    	}
    }
});
 