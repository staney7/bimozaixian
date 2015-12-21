registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryCounty', {
                url: '/registryCounty',
                templateUrl: 'views/registry/registryCounty.html',
                controller: 'registryCountyCtrl'
            });
    })
    .controller('registryCountyCtrl', function ($scope) {
        //选择城市

    });