app.

	config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');
		
		$stateProvider.state('home', {
			url: '/',
			templateUrl: 'views/home.html',
			controller: 'HomeController'
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