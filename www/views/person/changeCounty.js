personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeCounty', {
                url: '/changeCounty',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeCounty.html',
                        controller: 'changeCountyCtrl'
                    }
                }
            });
    })
    .controller('changeCountyCtrl', function ($scope,$rootScope,$state) {
        $rootScope.county_list=["蜀山区","包河区"];
        $scope.select_county= function (countyName) {
            $rootScope.county_selected=countyName;
            $state.go("tabs.changeSchool");
        }

    });