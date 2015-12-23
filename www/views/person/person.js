personModule=angular.module('personModule', []);
personModule.config(function($stateProvider){
        $stateProvider
            .state('tabs.person', {
                url: '/person',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/person.html',
                        controller: 'personCtrl'
                    }
                }
            });
    })
    .controller('personCtrl', function($scope,$rootScope,$state){
        $scope.go_change_name=function(){
            $rootScope.back_button_show=true;
            $state.go("tabs.changeName");
        };
        $scope.go_change_school=function(){
            $rootScope.back_button_show=true;
            $state.go("tabs.changeProvince");
        };
        $scope.go_change_class=function(){
            $rootScope.back_button_show=true;
            $state.go("tabs.changeClass");
        };
        $scope.go_change_record=function(){
            $rootScope.back_button_show=true;
            $state.go("tabs.personRecord");
        };
        $scope.go_change_number=function(){
            $rootScope.back_button_show=true;
            $state.go("tabs.changeNumber");
        };
        $scope.go_change_mobile=function(){
            $rootScope.back_button_show=true;
            $state.go("tabs.changeMobile");
        };
    });