var app = angular.module('app', []);

app.controller("homeCtrl", function($scope) {
	$scope.welcome = "Welcome to Yuanxu Li's Homepage";
});

app.filter('filter', function() {
	return function(x) {
		return x;
	}
})