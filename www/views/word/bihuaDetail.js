wordModule.config(function($stateProvider){
        $stateProvider
            .state('tabs.bihua', {
                url: '/bihua',
                views: {
                    'word-tab': {
                        templateUrl: 'views/word/bihuaDetail.html',
                        controller: 'bihuaDetailCtrl'
                    }
                }
            });
    })
    .controller('bihuaDetailCtrl', function($scope){
        $scope.actived=["active",""];
        $scope.page=["","ng-hide"];
        $scope.tabs_click=function(t){
            $scope.actived[0]="";
            $scope.actived[1]="";
            $scope.actived[t]="active"
            $scope.page[0]="ng-hide";
            $scope.page[1]="ng-hide";
            $scope.page[t]="";
        }
    });