angular.module('personModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tabs.personRecord', {
                url: '/personRecord',
                templateUrl: 'views/person/personRecord.html',
                controller: 'personRecordCtrl'
            });
    })
    .controller('personRecordCtrl', function ($scope) {
        //选择城市

    });