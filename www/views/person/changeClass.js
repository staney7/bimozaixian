personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeClass', {
                url: '/changeClass',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeClass.html',
                        controller: 'changeClassCtrl'
                    }
                }
            });
    })
    .controller('changeClassCtrl', function ($scope,$rootScope,$state,$ionicHistory) {
        $rootScope.class_list=["毛笔字一班","毛笔字二班"];
        $rootScope.select_class=function(className){
            $rootScope.class_selected=className;
            $ionicHistory.clearHistory();
            $state.go("tabs.person").then(
                function(){
                    $rootScope.back_button_show=false;
                    $ionicHistory.clearHistory();
                }
            )
        }

    });