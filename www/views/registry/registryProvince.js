angular.module('registryModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('registryProvince', {
                url: '/registryProvince',
                templateUrl: 'views/registry/registryProvince.html',
                controller: 'registryProvinceCtrl'
            });
    })
    .controller('registryProvinceCtrl', function ($scope) {
        //Ñ¡Ôñ³ÇÊÐ

    });