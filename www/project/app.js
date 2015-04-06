/**
 * Created by Aleksey on 30.03.2015.
 */
angular.module('AlphabetForKids', ['ui.router', 'pascalprecht.translate', 'ngAnimate', 'Alphabet', 'Setting', 'Directives'])

.run(['$rootScope', function($rootScope){
    //init fast click (remove delay 300ms)
    FastClick.attach(document.body);

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady(){
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    }

    $rootScope.AppData = {
        languageApp: 'ru'
    }
}])

.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider){
    $stateProvider.state('main', {
        url: '/main',
        views: {
            'app-view': {
                templateUrl: 'project/main.html'
            }
        }
    });

    $translateProvider.useLoader('loaderLanguage', {});
    $translateProvider.preferredLanguage('ru');
    $urlRouterProvider.otherwise('/main');
}])

.controller('MenuCtrl', ['$rootScope', '$scope', '$translate', function($rootScope, $scope, $translate){
    //change language application
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
}])

.factory('loaderLanguage',['$http', '$q', function ($http, $q) {
    return function (options) {
        var deferred = $q.defer();
        $http.get('locale-' + options.key + '.json')
        .success(function (data) {
            deferred.resolve(data);
        })
        .error(function () {
            deferred.reject(options.key);
        });
        return deferred.promise;
    };
}]);