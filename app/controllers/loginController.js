(function() {
    angular.module('eventsApp')
    .controller('loginController', ['$scope', '$rootScope', '$location', 'loginService',
        function($scope, $rootScope, $location, loginService) {
        	$scope.doLogin = doLoginImpl;

        	function doLoginImpl() {
				$scope.loginError = false;

		    	loginService.doLogin($scope.username, $scope.password).then(function(user) {
		        	if(user) {
						$rootScope.user = user;
						$location.path('/');
		        	}
		    	}, function() {
		    		$scope.loginError = true;
		    	});
			};
        }
    ]);
    
})();