(function() {


    angular.module('eventsApp')

    .controller('homeController', ['$scope', '$mdSidenav',

        //'Controller as' syntax not used - necessary/how to integrate with Material?

        function($scope, $mdSidenav) {
            var Home = this;
            Home.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };

        }
    ])
})();
