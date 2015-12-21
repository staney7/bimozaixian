personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeMobile', {
                url: '/changeMobile',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeMobile.html',
                        controller: 'changeMobileCtrl'
                    }
                }
            });
    })
    .controller('changeMobileCtrl', function ($scope) {
        //选择城市

    });