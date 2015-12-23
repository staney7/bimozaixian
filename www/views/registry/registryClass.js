registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryClass', {
                url: '/registryClass',
                templateUrl: 'views/registry/registryClass.html',
                controller: 'registryClassCtrl'
            });
    })
    .controller('registryClassCtrl', function ($scope,$rootScope,$state,$ionicHistory) {
        $rootScope.class_list=["毛笔字一班","毛笔字二班"];
        $rootScope.select_class=function(className){
            $rootScope.class_selected=className;
            $ionicHistory.clearHistory();
            $state.go("registry").then(
                function(){
                    $rootScope.back_button_show=false;
                    $ionicHistory.clearHistory();
                }
            )
        }
    });