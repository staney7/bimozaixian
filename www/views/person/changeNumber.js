angular.module('personModule',[])
    .config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeNumber', {
                url: '/changeNumber',
                templateUrl: 'views/person/changeNumber.html',
                controller: 'changeNumberCtrl'
            });
    })
    .controller('changeNumberCtrl', function ($scope) {
        //选择城市

    });