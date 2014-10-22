angular
	.module("srvapp", ["ngRoute", "srvFilters", "srvResource"])	
	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when("/intro", {
				controller: "SrvController",
				templateUrl: "intro.html"					
			})			
			.when("/questions/0", {
				redirectTo:"/intro"	
			})			
			.when("/questions/:num", {
				controller: "SrvController",
				templateUrl: "view.html"
			})
			.otherwise({
				redirectTo:"/intro"
			});
	})
	.controller('SrvController', function($scope, $http, $route, $routeParams, $location, srvService, $templateCache) {	
		//$templateCache.removeAll(); //testing only	
		
		srvService.get(function(data){
			 data.unshift({});
			 var responseData = data[$routeParams.num];			
			 if(!responseData){
				srvapp.currentNum = 0; 
				$location.path("/intro");
			} else {				
				$scope.qholder = responseData;
				srvapp.currentNum = $routeParams.num;
				srvapp.data = data;	
			}			
		});	
		$scope.pageEvents = {};							
		$scope.pageEvents = srvapp.initPageEvents($location);
	})
;