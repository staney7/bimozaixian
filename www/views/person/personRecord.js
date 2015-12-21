personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.personRecord', {
                url: '/personRecord',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/personRecord.html',
                        controller: 'personRecordCtrl'
                    }
                }
            });
    })
    .controller('personRecordCtrl', function ($scope) {
        //选择城市

    });