/**
 * Created by Aleksey on 06.04.2015.
 */
angular.module('Directives', [])

.directive('toggleActivated', ['$rootScope', function($rootScope){
    return{
        restrict: 'A',
        link: function(scope, element, attrs){
            element.on('touchstart', function(){
                element.addClass('activated');
            });

            element.on('touchend', function(){
                element.removeClass('activated');
            })
        }
    }
}])

.directive("playSound", ['$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
        scope: {
            currSound: '=currSound'
        },
        controller: function ($scope, $element, $attrs) {
            var sound = $scope.$parent.letter.sound,
                volume = $rootScope.AppData.volumeApp,
                posTouchStart;

            $element.on('touchstart', onTouchStart);
            $element.on('touchend', onTouchEnd);

            function onTouchStart(event){
                if(event.targetTouches.length == 1){
                    if($scope.currSound && $scope.currSound.id != sound.id){
                        var id = $scope.currSound.id.split('/')[1].slice(0, 1);
                        $scope.currSound.stop();
                        document.getElementById(id).parentNode.classList.remove('tap-letter');
                    }
                    posTouchStart = event.changedTouches[0].pageY;
                }
            }

            function onTouchEnd(event){
                if(event.changedTouches[0].pageY == posTouchStart){
                    sound.volume = volume;
                    $element.parent().addClass('tap-letter');
                    sound.play();
                    $scope.currSound = sound;
                    $timeout(function(){
                        $element.parent().removeClass('tap-letter');
                    }, 550);
                }
            }
        }
    };
}])

.directive('modalSetting', ['$rootScope', '$document', function($rootScope, $document){
    return{
        restrict: 'A',
        template: '<div class="setting-btn">{{"SETTINGS" | translate}}</div>' +
        '<div class="modal" ng-show="visible">{{"SETTINGS" | translate}}' +
        '<div><label for="input-volume">{{"VOLUME" | translate}}</label>' +
        '<input type="range" id="input-volume" min="0" max="1" step="0.05" ng-model="volume" />' +
        '<button>{{"COMPLETE" | translate}}</button></div>' +
        '</div>',
        controller: function($scope, $element, $attrs){
            $scope.visible = false;
            $scope.volume = $rootScope.AppData.volumeApp;
            $scope.$watch('volume', function(){
                $rootScope.AppData.volumeApp = $scope.volume;
            });
            $document.on('click', function(evt){
                if(!angular.element(evt.target).hasClass('setting-btn') && !angular.element(evt.target).parent().hasClass('modal')){
                    $scope.$apply(function() {
                        $scope.visible = false;
                        document.querySelector('.modal').classList.remove('show');
                    });
                }
            });

            $element.on('click', function(evt){
                $scope.$apply(function(){
                    $scope.visible = true;
                    document.querySelector('.modal').classList.add('show');
                });
            });
        }
    }
}])