registryModlue=angular.module('registryModule',[]);
registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registry', {
                url: '/registry',
                templateUrl: 'views/registry/registry.html',
                controller: 'registryCtrl'
            });
    })
    .controller('registryCtrl', function ($scope) {

    });