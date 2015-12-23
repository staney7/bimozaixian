personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeSchool', {
                url: '/changeSchool',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeSchool.html',
                        controller: 'changeSchoolCtrl'
                    }
                }
            });
    })
    .controller('changeSchoolCtrl', function ($scope,$rootScope,$state,$ionicHistory) {
        //选择城市
        $rootScope.school_list=["XX小学1","XX小学2"];
        $scope.select_school=function(schoolName){
            $rootScope.school_selected=schoolName;
            $ionicHistory.clearHistory();
            $state.go("tabs.person").then(
                function(){
                    $rootScope.back_button_show=false;
                    $ionicHistory.clearHistory();
                }
            )
        }

    });