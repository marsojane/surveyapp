(function(){
	srvresource = angular.module("srvResource", ["ngResource"]);
			
	srvresource.factory('srvService',function($resource, $location){
		return $resource('data/srvcontent.json', {}, {			
		  get: {method:'GET', params:{}, isArray:true},
		});		
	});
})();