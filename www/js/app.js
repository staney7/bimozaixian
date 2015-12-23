// Ionic Rec App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('bimozaixianApp', ['ionic', 'personModule', 'homeworkModule', 'registryModule', 'wordModule'])
    .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, $httpProvider) {
        $ionicConfigProvider.tabs.position('bottom');
        $stateProvider
            .state('tabs', {
                abstract: true,
                url: '/tabs',
                templateUrl: 'views/tabs/tabs.html'
            });
        $urlRouterProvider.otherwise('registry');
        $httpProvider.defaults.transformRequest = function (data) {
            if (!angular.isObject(data)) {
                return ((data == null) ? "" : data.toString());
            }
            var buffer = [];
            for (var p in data) {
                if (!data.hasOwnProperty(p))
                    continue;
                buffer.push(encodeURIComponent(p) + "=" +
                encodeURIComponent((data[p] == null) ? "" : data[p]));
            }
            return buffer.join("&");
        };
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    })
    .run(function ($ionicPlatform,$rootScope) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
        $rootScope.province_list=[];
        $rootScope.city_list=[];
        $rootScope.county_list=[];
        $rootScope.class_list=[];
        $rootScope.school_list=[];


        $rootScope.province_selected="";
        $rootScope.city_selected="";
        $rootScope.county_selected="";
        $rootScope.class_selected="";
        $rootScope.school_selected="";

        $rootScope.back_button_show=true;

        $rootScope.user_mobile="";
        $rootScope.user_id="";
        $rootScope.user_name="";



    })
