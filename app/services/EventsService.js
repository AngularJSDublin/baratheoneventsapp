angular.module('eventsApp.services').factory('eventsService', ['$http', function ($http) {
	return {
		getAllEvents : getAllEventsImpl,
		getEvent: getEvent,
		addNewEvent: addNewEvent,
		editEvent: editEvent
	};

	function getAllEventsImpl() {
		return $http.get('https://baratheoneventsdb.firebaseio.com/events.json');
	};

	function getEvent(eventId) {
		return $http.get('https://baratheoneventsdb.firebaseio.com/events/' + eventId + '.json');
	};

	function addNewEvent(event) {
		return $http.post('https://baratheoneventsdb.firebaseio.com/events.json', event);
	};

	function editEvent(event) {
		return $http.put('https://baratheoneventsdb.firebaseio.com/events.json', event);
	};
}]);