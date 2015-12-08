angular.module('homeworkModule', [])
    .config(function($stateProvider){
        $stateProvider
            .state('tabs.homework', {
                url: '/homework',
                views: {
                    'homework-tab': {
                        templateUrl: 'views/homework/homework.html',
                        controller: 'homeworkCtrl'
                    }
                }
            });
    })
    .controller('homeworkCtrl', function($scope){
        // netdisk controller
    });