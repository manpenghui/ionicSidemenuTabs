angular.module('myApp.controllers', [])

.controller('tab1Controller', function($scope, $ionicSideMenuDelegate,$rootScope) {

		$scope.title = 'tab1Controller';
		$rootScope.toggle = function() {
			$ionicSideMenuDelegate.toggleLeft();
		};

	})
	.controller('tab2Controller', function($scope) {

		$scope.title = 'tab2Controller';

	})
	.controller('tab3Controller', function($scope) {

		$scope.title = 'tab3Controller';

	})

.controller('content1Controller', function($scope, $stateParams, $state) {

	$scope.title = 'content1Controller';

	$scope.goes = function() {
		$state.go('tab.news')
	}

	console.log($stateParams);

})