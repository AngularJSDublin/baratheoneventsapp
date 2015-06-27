angular.module('eventsApp.services').factory('loginService', ['$q', '$firebaseObject', function($q, firebaseObject) {
	return {
		doLogin : doLoginImpl
	};

	function getRef () {
		return new Firebase('https://baratheoneventsdb.firebaseio.com/users');
	};

	function doLoginImpl(username, password) {
		var myQ = $q.defer();

		getRef().orderByChild("username").equalTo(username).limitToFirst(1).once("value", function(data) {
			var user = data.val();

			// fixme: only admin/admin is working, other logins will return array with empty elements i.e. [null,null,john]
			// need to get a single object from the firebase call
			// use forEach!!!!
			if(!!user && user.length && user[0].password == password) {
				myQ.resolve(user[0]);
			} else {
				myQ.reject();
			}
		});

		return myQ.promise;
	};
}]);