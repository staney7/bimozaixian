angular.module('registryModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('registryClass', {
                url: '/registryClass',
                templateUrl: 'views/registry/registryClass.html',
                controller: 'registryClassCtrl'
            });
    })
    .controller('registryClassCtrl', function ($scope) {
        //Ñ¡Ôñ³ÇÊÐ

    });