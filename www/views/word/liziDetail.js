angular.module('wordModule', [])
    .config(function($stateProvider){
        $stateProvider
            .state('tabs.lizi', {
                url: '/lizi',
                views: {
                    'lizi-tab': {
                        templateUrl: 'views/word/liziDetail.html',
                        controller: 'liziCtrl'
                    }
                }
            });
    })
    .controller('liziCtrl', function($scope){
        // lizi controller
    });