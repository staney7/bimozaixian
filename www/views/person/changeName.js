angular.module('personModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeName', {
                url: '/changeName',
                templateUrl: 'views/person/changeName.html',
                controller: 'changeNameCtrl'
            });
    })
    .controller('changeNameCtrl', function ($scope) {
        //Ñ¡Ôñ³ÇÊÐ

    });