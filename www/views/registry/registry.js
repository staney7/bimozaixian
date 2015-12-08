angular.module('registryModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('registry', {
                url: '/registry',
                templateUrl: 'views/registry/registry.html',
                controller: 'registryCtrl'
            });
    })
    .controller('registryCtrl', function ($scope) {
        // login controller
        // 用户的登录凭证


    });