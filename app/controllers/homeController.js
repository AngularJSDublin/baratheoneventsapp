(function() {
    angular.module('eventsApp')
    .controller('homeController', ['$scope', '$mdSidenav'
        function($scope, $mdSidenav, eventsService) {
            var Home = this;
            Home.toggleSidenav = function(menuId) {
                $mdSidenav(menuId).toggle();
            };
        }
    ])
})();
