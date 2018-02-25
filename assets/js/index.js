angular.module('mainApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



  .controller('mainController', function($scope) {
	  	// $scope.setData = function(code){
	  	// 	localStorage.setItem('code',code);
	  	// 	localStorage.setItem('type',code);
	  	// 	window.location.href = "results.html";

	  	// }
  });

