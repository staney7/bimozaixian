angular.module('personModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeCounty', {
                url: '/changeCounty',
                templateUrl: 'views/person/changeCounty.html',
                controller: 'changeCountyCtrl'
            });
    })
    .controller('changeCountyCtrl', function ($scope) {
        //选择城市

    });