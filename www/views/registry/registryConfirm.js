registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryConfirm', {
                url: '/registryConfirm',
                templateUrl: 'views/registry/registryConfirm.html',
                controller: 'registryConfirmCtrl'
            });
    })
    .controller('registryConfirmCtrl', function ($scope,$state,$rootScope,$q,$timeout) {
        $scope.confirm={number:""};
        $scope.get_button={
            class:"get-button-release",
            isClicked:false,
            time:""
        };
        $rootScope.remainTime=0;
        $scope.complete_registry=function(){
            alert($scope.confirm.number);
            $state.go("tabs.word");
        };
        $scope.get_button_click=function(){
            if ($scope.get_button.isClicked==true) return;
            $scope.get_button.class="get-button-clicked";
            $scope.get_button.isClicked=true;
            $rootScope.remainTime=10;
            decTime();
        }
        var time=null;
        function decTime(){
            if ($rootScope.remainTime==0){
                $scope.get_button.isClicked=false;
                $scope.get_button.class="get-button-release";
                $scope.get_button.time="";
                return ;
            }
            $scope.get_button.time="("+$rootScope.remainTime+")";
            $rootScope.remainTime--;
            time=$timeout(decTime,1000)

        }

    });