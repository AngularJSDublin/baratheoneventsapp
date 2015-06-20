'use strict';

angular.module('eventsApp', [
    'ui.router',
    'firebase',
    'ngAnimate',
    'ngAria',
    'ngMaterial'])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'homeController as Home'
        })
            .state('events', {
                url: '/events',
                templateUrl: 'views/home.events.html',
                // controller: 'EventsController'
            })
            // .state('home.events.detail', {
            //     url: '/:id',
            //     templateUrl: 'views/home.detail.html',
            //     controller: 'DetailController'
            // })
            // .state('home.other', {
            //     url: '/other',
            //     templateUrl: 'views/home.other.html',
            //     controller: 'OtherController'
            // });

    }]);
