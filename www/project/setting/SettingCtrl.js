/**
 * Created by Aleksey on 06.04.2015.
 */
angular.module('Setting', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('setting', {
        url: '/setting',
        views: {
            'app-view': {
                templateUrl: 'project/setting/setting.html'
            }
        }
    });
}])

.controller('SettingCtrl', ['$rootScope', '$scope', function($rootScope, $scope){

}])
