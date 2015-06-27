'use strict';

angular.module('eventsApp', [
    'ui.router',
    'firebase',
    'ngAnimate',
    'ngAria',
    'ngMaterial'
])

.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/views/events.html',
        controller: 'eventsController'
    })

}]);
