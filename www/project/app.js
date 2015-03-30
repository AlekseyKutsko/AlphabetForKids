/**
 * Created by Aleksey on 30.03.2015.
 */
angular.module('AlphabetForKids', ['ui.router', 'ngAnimate', 'Alphabet'])

.run(function(){
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
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('main', {
        url: '/main',
        views: {
            'app-view': {
                templateUrl: 'project/main.html'
            }
        }
    });

    $urlRouterProvider.otherwise('/main');
}])

.controller('MenuCtrl', ['$rootScope', '$scope', function($rootScope, $scope){

}])