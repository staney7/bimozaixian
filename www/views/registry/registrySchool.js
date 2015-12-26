registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registrySchool', {
                url: '/registrySchool',
                templateUrl: 'views/registry/registrySchool.html',
                controller: 'registrySchoolCtrl'
            });
    })
    .controller('registrySchoolCtrl', function ($scope,$rootScope,$state,$ionicHistory) {
        //选择城市
        $rootScope.school_list=["XX小学1","XX小学2"];
        $scope.select_school=function(schoolName){
            $rootScope.school_selected=schoolName;
            $ionicHistory.clearHistory();
            $state.go("registry").then(
                function(){
                    $rootScope.back_button_show=false;
                    $ionicHistory.clearHistory();
                }
            )
        }
    });