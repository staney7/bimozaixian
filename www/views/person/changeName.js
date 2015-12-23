personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeName', {
                url: '/changeName',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeName.html',
                        controller: 'changeNameCtrl'
                    }
                }
            });
    })
    .controller('changeNameCtrl', function ($scope,$rootScope,$state,$ionicHistory) {
        $scope.user={name:""};
        $scope.save=function(){
            $rootScope.user_name=$scope.user.name;
            $ionicHistory.clearHistory();
            $state.go("tabs.person").then(function(){
                $rootScope.back_button_show=false;
                $ionicHistory.clearHistory();
            });
        }

    });