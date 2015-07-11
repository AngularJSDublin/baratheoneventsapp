(function() {
    angular.module('eventsApp')
        .controller('eventDetailsController', ['$scope', '$stateParams', 'eventsService', '$mdDialog',
            function($scope, $stateParams, eventsService, $mdDialog) {

                var eventId = $stateParams.eventId;

                eventsService.getEvent(eventId).then(function (data) {
                    $scope.eventDetails = data;
                });

                $scope.registerForEvent = function (eventId) {
                    $mdDialog.show({
                        templateUrl: 'app/views/registerModal.html',
                        parent: angular.element(document.body),
                        controller: DialogController
                    });

                    function DialogController($scope, $mdDialog) {

                        $scope.closeDialog = function(){
                            console.log("Close test");
                            $mdDialog.hide();
                        };

                        $scope.submitRegistration = function(){

                            var registrationDetails = {

                                eventId: eventId,
                                name: $scope.name,
                                email: $scope.email

                            };

                            console.log(registrationDetails);
                        }
                    }

                };

                //Fixme: If navigate backwards, destroy modal. Modal visible if navigate back.

                //$scope.$on('$destroy', function () {
                //    $mdDialog.hide();
                //});
                //
                //$rootScope.$emit('myEvent');
                //
                //$rootScope.$on('myEvent', function (event, data) {
                //
                //    if('$destroy'){
                //        $mdDialog.hide();
                //    }
                //
                //    else {
                //
                //
                //    }

                //})

            }]);


})();
