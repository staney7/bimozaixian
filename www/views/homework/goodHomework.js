homeworkModule.config(function($stateProvider){
        $stateProvider
            .state('tabs.goodHomework', {
                url: '/goodHomework',
                views: {
                    'homework-tab': {
                        templateUrl: 'views/homework/goodHomework.html',
                        controller: 'goodHomeworkCtrl'
                    }
                }
            });
    })
    .controller('goodHomeworkCtrl', function($scope){
        // goodhomework controller
    });