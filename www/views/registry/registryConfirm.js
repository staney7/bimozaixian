angular.module('registryModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('registryConfirm', {
                url: '/registryConfirm',
                templateUrl: 'views/registry/registryConfirm.html',
                controller: 'registryConfirmCtrl'
            });
    })
    .controller('registryConfirmCtrl', function ($scope) {
        //Ñ¡Ôñ³ÇÊÐ

    });