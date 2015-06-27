(function() {


    angular.module('eventsApp')

    .controller('eventsController', ['$scope', '$firebaseObject',

        //'Controller as' syntax not used - necessary/how to integrate with Material?

        function($scope, $firebaseObject) {

            var myDataRef = new Firebase('https://baratheoneventsdb.firebaseio.com/');
            // download the data into a local object
            $scope.mydata = $firebaseObject(myDataRef);

        }
    ])
})();
