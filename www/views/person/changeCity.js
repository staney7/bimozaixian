angular.module('personModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeCity', {
                url: '/changeCity',
                templateUrl: 'views/person/changeCity.html',
                controller: 'changeCityCtrl'
            });
    })
    .controller('changeCityCtrl', function ($scope) {
        //选择城市

    });