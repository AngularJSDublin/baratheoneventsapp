(function() {


    angular.module('eventsApp')

        .controller('RegisterController', ['$scope',

            function () {
                var Register = this;
                Register.user = {
                    title: 'Developer',
                    email: 'ipsum@lorem.com',

                };
            }
        ])
})();
