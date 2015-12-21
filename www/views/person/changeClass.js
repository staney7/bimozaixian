personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeClass', {
                url: '/changeClass',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeClass.html',
                        controller: 'changeClassCtrl'
                    }
                }
            });
    })
    .controller('changeClassCtrl', function ($scope) {
        //选择城市

    });