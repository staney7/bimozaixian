angular.module('wordModule', [])
    .config(function($stateProvider){
        $stateProvider
            .state('tabs.bihua', {
                url: '/bihua',
                views: {
                    'word-tab': {
                        templateUrl: 'views/word/bihuaDetail.html',
                        controller: 'bihuaDetailCtrl'
                    }
                }
            });
    })
    .controller('bihuaDetailCtrl', function($scope){
        // word controller
    });