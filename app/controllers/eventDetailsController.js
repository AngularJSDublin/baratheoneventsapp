(function() {
    angular.module('eventsApp')
    .controller('eventDetailsController', ['$scope', '$stateParams', 'eventsService', '$mdDialog',
        function($scope, $stateParams, eventsService, $mdDialog) {
        	var eventId = $stateParams.eventId;
        	
        	eventsService.getEvent(eventId).then(function(data) {
        		$scope.eventDetails = data;
        	});

            $scope.registerForEvent = function (ev) {
                $mdDialog.show({
                    controller: "dialogController",
                    templateUrl: 'app/views/registerModal.html',
                    parent: angular.element(document.body),
                
                })
            }
        }

    ])
})();
