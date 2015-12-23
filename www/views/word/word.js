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
    .controller('wordCtrl', function($scope,$ionicPopover){
        $scope.search={content:""};
        $scope.word_mode="全部";
        $ionicPopover.fromTemplateUrl('templates/popover.html', {
            scope: $scope
        }).then(function(popover) {
            $scope.popover = popover;
        });

    });