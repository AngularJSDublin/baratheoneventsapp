angular.module('eventsApp.services').factory('eventsService', ['$q', '$firebaseArray', '$firebaseObject', function($q, $firebaseArray, $firebaseObject) {
	var FIREBASE_URL = 'https://baratheoneventsdb.firebaseio.com/events';

	return {
		getAllEvents : getAllEventsImpl,
		getEvent: getEvent,
		addNewEvent: addNewEvent,
		editEvent: editEvent,
		registerUser: registerUser
	};

	function getRef () {
		return new Firebase(FIREBASE_URL);
	};

	function getEventUsersRef(eventId) {
		return new Firebase(FIREBASE_URL + '/' + eventId + '/users');
	};

	function newQ() {
		return $q.defer();
	};

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

	function registerUser(eventId, name, email) {
		myQ = newQ();

		var usersRef = getEventUsersRef(eventId);

		var newPushRef = usersRef.push({name : name, email : email}, function() {
			myQ.resolve(newPushRef.key());
		});

		return myQ.promise;
	}
}]);