personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeSchool', {
                url: '/changeSchool',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeSchool.html',
                        controller: 'changeSchoolCtrl'
                    }
                }
            });
    })
    .controller('changeSchoolCtrl', function ($scope) {
        //选择城市

    });