angular.module('personModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeProvince', {
                url: '/changeProvince',
                templateUrl: 'views/person/changeProvince.html',
                controller: 'changeProvinceCtrl'
            });
    })
    .controller('changeProvinceCtrl', function ($scope) {
        //选择城市

    });