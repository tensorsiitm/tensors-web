angular.module('resultsApp', ['ngCookies'])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



  .controller('resultsController', function($scope, $http, $timeout) {
	  	var code = localStorage.getItem('code');
	  	$scope.resultType = localStorage.getItem('type'); 
	  	console.log(code);

		var dataRef = firebase.database().ref("0/"+code);

		dataRef.on('value', function(snapshot){
				console.log(snapshot.val());
				$scope.data = snapshot.val();
		});
		$scope.loader = true;
		$timeout(function () {
			$scope.loader = false;
		}, 4000);
  });

