/**
 * Created by Aleksey on 30.03.2015.
 */
angular.module('Alphabet', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('alphabet', {
        url: '/alphabet',
        views: {
            'app-view': {
                templateUrl: 'project/alphabet/alphabet.html'
            }
        }
    });
}])

.controller('AlphabetCtrl', ['$rootScope', '$scope', function($rootScope, $scope){

}])
