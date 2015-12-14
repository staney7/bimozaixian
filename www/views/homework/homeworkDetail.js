angular.module('homeworkModule', [])
    .config(function($stateProvider){
        $stateProvider
            .state('tabs.homeworkDetail', {
                url: '/homeworkDetail',
                views: {
                    'homeworkDetail-tab': {
                        templateUrl: 'views/homework/homeworkDetail.html',
                        controller: 'homeworkDetailCtrl'
                    }
                }
            });
    })
    .controller('homeworkDetailCtrl', function($scope){
        // netdisk controller
    });