angular.module('registryModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('registrySchool', {
                url: '/registrySchool',
                templateUrl: 'views/registry/registrySchool.html',
                controller: 'registrySchoolCtrl'
            });
    })
    .controller('registrySchoolCtrl', function ($scope) {
        //Ñ¡Ôñ³ÇÊÐ

    });