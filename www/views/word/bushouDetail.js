wordModule.config(function($stateProvider){
        $stateProvider
            .state('tabs.bushouDetail', {
                url: '/bushouDetail',
                views: {
                    'word-tab': {
                        templateUrl: 'views/word/bushouDetail.html',
                        controller: 'bushouDetailCtrl'
                    }
                }
            });
    })
    .controller('bushouDetailCtrl', function($scope){
        // bushouDetail controller
    });