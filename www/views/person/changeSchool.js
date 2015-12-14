angular.module('personModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeSchool', {
                url: '/changeSchool',
                templateUrl: 'views/person/changeSchool.html',
                controller: 'changeSchoolCtrl'
            });
    })
    .controller('changeSchoolCtrl', function ($scope) {
        //选择城市

    });