angular.module('personModule', [])
    .config(function($stateProvider){
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
    .controller('personCtrl', function($scope){
        // person controller
    });