personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeCounty', {
                url: '/changeCounty',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeCounty.html',
                        controller: 'changeCountyCtrl'
                    }
                }
            });
    })
    .controller('changeCountyCtrl', function ($scope) {
        //选择城市

    });