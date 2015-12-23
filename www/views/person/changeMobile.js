personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeMobile', {
                url: '/changeMobile',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeMobile.html',
                        controller: 'changeMobileCtrl'
                    }
                }
            });
    })
    .controller('changeMobileCtrl', function ($scope,$state,$ionicHistory,$rootScope) {
        $scope.user={mobile:""};
        $scope.save=function(){
            $rootScope.user_mobile=$scope.user.mobile;
            $ionicHistory.clearHistory();
            $state.go("tabs.person").then(function(){
                $rootScope.back_button_show=false;
                $ionicHistory.clearHistory();
            });
        }

    });