angular.module('personModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeClass', {
                url: '/changeClass',
                templateUrl: 'views/person/changeClass.html',
                controller: 'changeClassCtrl'
            });
    })
    .controller('changeClassCtrl', function ($scope) {
        //选择城市

    });