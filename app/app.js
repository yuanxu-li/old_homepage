var app = angular.module('app', []);

app.controller("homeCtrl", function($scope) {
	$scope.welcome = "Welcome to Yuanxu Li's Homepage";
});

app.controller("linkCtrl", function($scope, $http) {
	$http.get('/old_homepage/public/json/links.json').success(function(data) {
		$scope.links = data;
	});
});

app.controller("nameCtrl", function($scope) {
	$scope.baseurl = "/old_homepage";
});

app.directive("navMenu", function() {
	return {
		restrict: 'E',
		templateUrl: '/old_homepage/views/navigation.html',
		controller: function($scope) {
			$scope.tab = 1;
			$scope.isSelected = function(checkTab) {
				return $scope.tab === checkTab;
			};
			$scope.selectTab = function(setTab) {
				$scope.tab = setTab;
			};
		},
		controllerAs: 'nav'
	};
});

app.directive("pageFooter", function() {
	return {
		restrict: 'E',
		templateUrl: '/old_homepage/views/footer.html'
	};
});

app.filter('filter', function() {
	return function(x) {
		return x;
	};
})