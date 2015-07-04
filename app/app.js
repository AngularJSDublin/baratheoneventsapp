'use strict';

angular.module('eventsApp', [
    'ui.router',
    'firebase',
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'eventsApp.services'
])


.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/views/events.html',
        controller: 'eventsController'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'app/views/login.html',
        controller: 'loginController'
    })
    .state('event-details', {
        url: '/:eventId',
        templateUrl: 'app/views/event-details.html',
        controller: 'eventDetailsController'
    })
        .state('event-test', {
            url: '/event-test',
            templateUrl: 'app/views/eventTest.html',
            controller: 'eventTestController'
        }
    )
}]);
