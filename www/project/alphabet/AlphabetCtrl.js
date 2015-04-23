/**
 * Created by Aleksey on 30.03.2015.
 */
angular.module('Alphabet', [])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider.state('alphabet', {
        cache: false,
        url: '/alphabet',
        views: {
            'app-view': {
                templateUrl: 'project/alphabet/alphabet.html'
            }
        }
    });
}])

.controller('AlphabetCtrl', ['$rootScope', '$scope', '$state', 'ngAudio', function($rootScope, $scope, $state, ngAudio){
    var arrayLetterRUS = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф',
        'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

    $scope.alphaBet = [];
    $scope.alphaBetScope = {
        currentSound: null
    };
    for(var i = 0; i < arrayLetterRUS.length; i++){
        $scope.alphaBet.push({letter: arrayLetterRUS[i], src: 'img/RUS/' + arrayLetterRUS[i] + '.png', sound: ngAudio.load('sound/' + arrayLetterRUS[i] + '.mp3')/*, sound: 'sound/' + arrayLetterRUS[i] + '.wav'*/})
    }

    $scope.backMenu = function(){
        if($scope.alphaBetScope.currentSound){
            $scope.alphaBetScope.currentSound.stop();
        }
        $state.go('main');
    }
}])
