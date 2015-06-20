(function(){


    angular.module('eventsApp')

        .controller('HomeCtrl', [ '$scope', '$mdSidenav', '$firebaseObject',

            //'Controller as' syntax not used - necessary/how to integrate with Material?

            function($scope, $mdSidenav, $firebaseObject) {
                var Home = this;
                Home.toggleSidenav = function (menuId) {
                    $mdSidenav(menuId).toggle();
                };

                var myDataRef = new Firebase('https://baratheoneventsdb.firebaseio.com/');
                // download the data into a local object
                $scope.mydata = $firebaseObject(myDataRef);


            }
        ])
})();
