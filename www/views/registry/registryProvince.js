registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryProvince', {
                url: '/registryProvince',
                templateUrl: 'views/registry/registryProvince.html',
                controller: 'registryProvinceCtrl'
            });
    })
    .controller('registryProvinceCtrl', function ($scope) {
        //选择城市

    });