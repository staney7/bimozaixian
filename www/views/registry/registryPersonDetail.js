registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryPersonDetail', {
                url: '/registryPersonDetail',
                templateUrl: 'views/registry/registryPersonDetail.html',
                controller: 'registryPersonDetailCtrl'
            });
    })
    .controller('registryPersonDetailCtrl', function ($scope,$rootScope,$state) {

        $scope.user={id:"",name:"",mobile:""};
        $scope.go_confirm=function(){
            $rootScope.user_name=$scope.user.name;
            $rootScope.user_id=$scope.user.id;
            $rootScope.user_mobile=$scope.user.mobile;
            $state.go("registryConfirm");
        }


    });