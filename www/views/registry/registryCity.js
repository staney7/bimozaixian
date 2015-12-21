registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryCity', {
                url: '/registryCity',
                templateUrl: 'views/registry/registryCity.html',
                controller: 'registryCityCtrl'
            });
    })
    .controller('registryCityCtrl', function ($scope) {

    });