(function() {
    angular.module('eventsApp')
    .controller('eventsController', ['$scope', 'eventsService',
        function($scope, eventsService) {
        	eventsService.getAllEvents().then(function(data) {
        		$scope.events = data;
        	});
        }
    ])
})();
