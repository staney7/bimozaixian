personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeNumber', {
                url: '/changeNumber',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeNumber.html',
                        controller: 'changeNumberCtrl'
                    }
                }
            });
    })
    .controller('changeNumberCtrl', function ($scope,$rootScope,$state,$ionicHistory) {
        $scope.user={number:""};
        $scope.save=function(){
            $rootScope.user_id=$scope.user.number;
            $ionicHistory.clearHistory();
            $state.go("tabs.person").then(function(){
                $rootScope.back_button_show=false;
                $ionicHistory.clearHistory();
            });
        }

    });