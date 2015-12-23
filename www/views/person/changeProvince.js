personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeProvince', {
                url: '/changeProvince',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeProvince.html',
                        controller: 'changeProvinceCtrl'
                    }
                }
            });
    })
    .controller('changeProvinceCtrl', function ($scope,$rootScope,$state) {
        $rootScope.province_list=["山西","河南"]
        $scope.select_province=function(provinceName){
            $rootScope.province_selected=provinceName;
            $state.go("tabs.changeCity");
        }

    });