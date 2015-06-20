angular.module("events.routes", [])

	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'app/views/home.html',
			controller: 'HomeCtrl as Home'
		})
		.state('home.detail', {
			url: '/',
			templateUrl: 'views/home.detail.html',
			controller: 'DetailController'
		})
		.state('home.events', {
			url: '/',
			templateUrl: 'views/home.events.html',
			controller: 'EventsController'
		})
		.state('home.other', {
			url: '/',
			templateUrl: 'views/home.other.html',
			controller: 'OtherController'
		});
		
	}]);