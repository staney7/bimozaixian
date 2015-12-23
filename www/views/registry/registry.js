registryModlue = angular.module('registryModule', []);
registryModlue.config(function ($stateProvider) {
    $stateProvider
        .state('registry', {
            url: '/registry',
            templateUrl: 'views/registry/registry.html',
            controller: 'registryCtrl'
        });
}).controller('registryCtrl',function ($scope,$state,$rootScope,$ionicPopup) {

        $scope.go_select_province=function(){
            $rootScope.back_button_show=true;
            $state.go("registryProvince");
        };
        $scope.go_select_class=function(){
            $rootScope.back_button_show=true;
            if ($rootScope.school_selected!="")
                $state.go("registryClass");
            else {
               $ionicPopup.alert({
                    title: '请选择学校',
                    //template: 'It might taste good'
                   okText:"确认"
                });
            }
        }
        $scope.go_personDetail=function() {
            $rootScope.back_button_show = true;
            if ($rootScope.school_selected == ""){
                $ionicPopup.alert({
                    title: '请选择学校',
                    //template: 'It might taste good'
                    okText: "确认"
                });
            } else if ($rootScope.class_selected=="") {
                $ionicPopup.alert({
                    title: '请选择班级',
                    //template: 'It might taste good'
                    okText: "确认"
                });
            } else {
                $state.go("registryPersonDetail");
            }
        }
    }
);