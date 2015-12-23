registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryCounty', {
                url: '/registryCounty',
                templateUrl: 'views/registry/registryCounty.html',
                controller: 'registryCountyCtrl'
            });
    })
    .controller('registryCountyCtrl', function ($scope,$rootScope,$state) {
        $rootScope.county_list=["蜀山区","包河区"];
        $scope.select_county= function (countyName) {
            $rootScope.county_selected=countyName;
            $state.go("registrySchool");
        }
    });