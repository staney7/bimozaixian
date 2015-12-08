angular.module('registryModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('registryPersonDetaile', {
                url: '/registryPersonDetaile',
                templateUrl: 'views/registry/registryPersonDetaile.html',
                controller: 'registryPersonDetaileCtrl'
            });
    })
    .controller('registryPersonDetaileCtrl', function ($scope) {
        //Ñ¡Ôñ³ÇÊÐ

    });