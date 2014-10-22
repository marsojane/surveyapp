(function(){
	var filters = {
		filterQtype: function(){			
			return function(input, qType, inputType){		
				return (srvapp.inputTypeQtypeStore[qType] == inputType)?input:undefined;
			}
		}	
	};
	angular.module("srvFilters", []).filter(filters);
})();