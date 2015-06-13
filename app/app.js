'use strict';

(function(){
	var app = angular.module('eventsApp', ['ui.router']);
	
	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		
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

	//controller as syntax
	app.controller('SampleController', function(){
		this.welcome = 'Welcome to the first AngularJS workshop.'
	});

	app.controller("SecondController", function($scope){
		$scope.welcomeAgain = 'By the end of the workshops you will build the Angular events app and hopefully understand the framework on deeper level.'
	});

})();