personModule.config(function ($stateProvider) {
        $stateProvider
            .state('tabs.changeProvince', {
                url: '/changeProvince',
                views: {
                    'person-tab': {
                        templateUrl: 'views/person/changeProvince.html',
                        controller: 'changeProvinceCtrl'
                    }
                }
            });
    })
    .controller('changeProvinceCtrl', function ($scope) {
        //选择城市

    });