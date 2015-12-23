registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryProvince', {
                url: '/registryProvince',
                templateUrl: 'views/registry/registryProvince.html',
                controller: 'registryProvinceCtrl'
            });
    })
    .controller('registryProvinceCtrl', function ($scope ,$rootScope,$state) {
        //选择城市
        $rootScope.province_list=["山西","河南"]
        $scope.select_province=function(provinceName){
            $rootScope.province_selected=provinceName;
            $state.go("registryCity");
        }
    });