angular.module('notasApp').factory('notasService',
		function() {
		var _notas = [ {
			id : 1,
			title : 'Simple title1',
			content : 'Sample content...',
			permalink : 'simple-title1',
			author : 'Sandeep',
			datePublished : '2012-04-04'
		}, {
			id : 2,
			title : 'Simple title2',
			content : 'Sample content...',
			permalink : 'simple-title2',
			author : 'Sandeep',
			datePublished : '2012-05-04'
		}, {
			id : 3,
			title : 'Simple title3',
			content : 'Sample content...',
			permalink : 'simple-title3',
			author : 'Sandeep',
			datePublished : '2012-06-04'
		}, {
			id : 4,
			title : 'Simple title4',
			content : 'Sample content...',
			permalink : 'simple-title4',
			author : 'Sandeep',
			datePublished : '2012-07-04'
		} ];
		return {
				getAll : function() {
					return this._notas;
				},
				getPostById : function(id) {
					for ( var i in this._notas) {
						if (this._notas[i].id == id) {
							return this._notas[i];
						}
					}
				},
			}
		});