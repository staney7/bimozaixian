angular.module('homeworkModule', [])
    .config(function($stateProvider){
        $stateProvider
            .state('tabs.goodHomework', {
                url: '/goodHomework',
                views: {
                    'goodHomework-tab': {
                        templateUrl: 'views/homework/goodHomework.html',
                        controller: 'goodHomeworkCtrl'
                    }
                }
            });
    })
    .controller('goodHomeworkCtrl', function($scope){
        // goodhomework controller
    });