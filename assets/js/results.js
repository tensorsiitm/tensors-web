angular.module('resultsApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



  .controller('resultsController', function($scope, $http, $timeout) {
// 	  	var code = localStorage.getItem('code');
		var code = "CLT1"
	  	$scope.resultType = localStorage.getItem('type'); 
		var dataRef = firebase.database().ref("/"+code);

		dataRef.on('value', function(snapshot){
				$scope.data = snapshot.val();
				console.log($scope.data)
		});
		$scope.loader = true;
		$timeout(function () {
			$scope.loader = false;
		}, 4500);
  });

