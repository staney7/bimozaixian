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
    .controller('changeCityCtrl', function ($scope) {
        //选择城市

    });