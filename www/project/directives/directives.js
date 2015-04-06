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