registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryPersonDetail', {
                url: '/registryPersonDetail',
                templateUrl: 'views/registry/registryPersonDetail.html',
                controller: 'registryPersonDetailCtrl'
            });
    })
    .controller('registryPersonDetailCtrl', function ($scope) {
        //选择城市

    });