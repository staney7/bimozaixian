wordModule=angular.module('wordModule', []);
wordModule.config(function($stateProvider){
        $stateProvider
            .state('tabs.word', {
                url: '/word',
                views: {
                    'word-tab': {
                        templateUrl: 'views/word/word.html',
                        controller: 'wordCtrl'
                    }
                }
            });
    })
    .controller('wordCtrl', function($scope){
        // word controller
    });