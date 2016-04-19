var app = angular.module('app', []);

app.controller("homeCtrl", function($scope) {
	$scope.welcome = "Welcome to Yuanxu Li's Homepage";
});

app.directive("navigation", function() {
	return {
		restrict: 'E',
		templateUrl: '/views/navigation.html'
	};
});

app.directive("footer", function() {
	return {
		restrict: 'E',
		templateUrl: '/views/footer.html'
	};
});

app.filter('filter', function() {
	return function(x) {
		return x;
	};
})