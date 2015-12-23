registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryCity', {
                url: '/registryCity',
                templateUrl: 'views/registry/registryCity.html',
                controller: 'registryCityCtrl'
            });
    })
    .controller('registryCityCtrl', function ($scope,$rootScope,$state) {
        $rootScope.city_list=["合肥","上海"];
        $scope.select_city=function(cityName){
            $rootScope.city_selected=cityName;
            $state.go("registryCounty");
        }
    });