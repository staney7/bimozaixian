personModule.config(function($stateProvider) {
        $stateProvider
            .state('tabs.changeCity', {
                url: '/changeCity',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeCity.html',
                        controller: 'changeCityCtrl'
                    }
                }
            });
    })
    .controller('changeCityCtrl', function ($scope,$rootScope,$state) {
        $rootScope.city_list=["合肥","上海"];
        $scope.select_city=function(cityName){
            $rootScope.city_selected=cityName;
            $state.go("tabs.changeCounty");
        }


    });