registryModlue.config(function ($stateProvider) {
        $stateProvider
            .state('registryConfirm', {
                url: '/registryConfirm',
                templateUrl: 'views/registry/registryConfirm.html',
                controller: 'registryConfirmCtrl'
            });
    })
    .controller('registryConfirmCtrl', function ($scope,$state,$rootScope) {
        $scope.confirm={number:""};
        $scope.complete_registry=function(){
            alert($scope.confirm.number);
            $state.go("tabs.lizi");
        }

    });