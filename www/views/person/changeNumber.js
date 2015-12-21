personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeNumber', {
                url: '/changeNumber',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeNumber.html',
                        controller: 'changeNumberCtrl'
                    }
                }
            });
    })
    .controller('changeNumberCtrl', function ($scope) {
        //选择城市

    });