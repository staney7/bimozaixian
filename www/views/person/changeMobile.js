angular.module('personModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeMobile', {
                url: '/changeMobile',
                templateUrl: 'views/person/changeMobile.html',
                controller: 'changeMobileCtrl'
            });
    })
    .controller('changeMobileCtrl', function ($scope) {
        //选择城市

    });