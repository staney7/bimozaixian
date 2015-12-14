angular.module('wordModule', [])
    .config(function($stateProvider){
        $stateProvider
            .state('tabs.bushouDetail', {
                url: '/bushouDetail',
                views: {
                    'bushouDetail-tab': {
                        templateUrl: 'views/word/bushouDetail.html',
                        controller: 'bushouDetailCtrl'
                    }
                }
            });
    })
    .controller('bushouDetailCtrl', function($scope){
        // bushouDetail controller
    });