registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryClass', {
                url: '/registryClass',
                templateUrl: 'views/registry/registryClass.html',
                controller: 'registryClassCtrl'
            });
    })
    .controller('registryClassCtrl', function ($scope) {
        //选择城市

    });