angular.module('eventsApp.services').factory('eventsService', ['$q', '$firebaseArray', '$firebaseObject', function($q, $firebaseArray, $firebaseObject) {
	return {
		getAllEvents : getAllEventsImpl,
		getEvent: getEvent,
		addNewEvent: addNewEvent,
		editEvent: editEvent
	};

	function getRef () {
		return new Firebase('https://baratheoneventsdb.firebaseio.com/events');
	};

	function newQ() {
		return $q.defer();
	}

	function getAllEventsImpl() {
		myQ = newQ();

		getRef().once("value", function(data) {
			myQ.resolve(data.val());
		});

		return myQ.promise;
	};

	function getEvent(eventId) {
		myQ = newQ();

		getRef().orderByKey().equalTo(eventId).once("value", function(data) {
			myQ.resolve(data.val());
		});

		return myQ.promise;
	};

	function addNewEvent(event) {
		throw new Error("not yet implemented!!!");
	};

	function editEvent(event) {
		throw new Error("not yet implemented!!!");
	};
}]);