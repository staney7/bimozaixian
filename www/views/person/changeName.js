personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeName', {
                url: '/changeName',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeName.html',
                        controller: 'changeNameCtrl'
                    }
                }
            });
    })
    .controller('changeNameCtrl', function ($scope) {
        //Ñ¡Ôñ³ÇÊÐ

    });