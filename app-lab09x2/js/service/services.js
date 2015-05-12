angular.module("laboratorio09App").factory('buscarTareaFactory', function() {
    return function(lista,claveBusqueda) {
    	console.log(lista);
    	console.log(claveBusqueda);
    	var resultado = -1;
    	lista.forEach(function(element, index, array){
			if(element.id == claveBusqueda){				
				resultado = index;
			}
		});
    	return resultado;
    };
}).factory('tareasDAO', function($resource) {
	var tareasDB = $resource("http://localhost:3000/tareas/:id", { id: "@id" }, {update: { method: 'PUT' }});
	var _listaTareas;
	var _getListaTareas= function (){
		if(typeof _listaTareas === 'undefined'){
			_listaTareas =tareasDB.query();
		}
		return _listaTareas;
	}
	var _addElemento= function(e){
		_listaTareas.push(e);
		tareasDB.save(e);
	};
	var _actualizarElemento= function(e){
		var indice = _findIndexById(e);
		console.log(_listaTareas);
		_listaTareas.splice(indice,1,e);
		console.log(_listaTareas);
		tareasDB.update(e);
	};
	var _findIndexById = function(id) {
    	var resultado = -1;
    	_listaTareas.forEach(function(element, index, array){
			if(element.id == id){				
				resultado = index;
			}
		});
    	return resultado;
	};
    return {
    	getListaTareas : _getListaTareas,
    	agregarTarea : _addElemento,
    	buscarTarea: function(id){
    		return _listaTareas[_findIndexById(id)];
    	},
    	actualizarTarea : _actualizarElemento
    }

});
