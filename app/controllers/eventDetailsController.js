(function() {
    angular.module('eventsApp')
    .controller('eventDetailsController', ['$scope', '$stateParams', 'eventsService',
        function($scope, $stateParams, eventsService) {
        	var eventId = $stateParams.eventId;
        	
        	eventsService.getEvent(eventId).then(function(data) {
        		$scope.eventDetails = data;
        	});
        }
    ])
})();
