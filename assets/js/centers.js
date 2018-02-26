angular.module('centersApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



  .controller('centersController', function($scope) {
  	console.log("Hi!");

  	$scope.setCenter = function(code){
  		localStorage.setItem('code',code);
  		localStorage.setItem('type','res');
  		window.location.href = "results.html";

  	}

  });