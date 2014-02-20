/**
 * @name useragent
 * @author Anton Samper Rivaya (@antonsamper)
 * @version 0.0.1
 * @description Add useragent and platform attributes, and output touch support as a class on the html tag.
 **/
angular.module('useragent', []).
    run(['$rootScope', function($rootScope) {
        $rootScope.useragent = {
            name:       navigator.userAgent,
            platform:   navigator.platform,
            touch:      (!!('ontouchstart' in window) || !!('onmsgesturechange' in window))
        };
    }]).
    factory('useragent', ['$rootScope', function($rootScope) {
        return $rootScope.useragent;
    }]).
    directive('html', function () {
        return {
            restrict: 'E',
            link: function (scope) {
                var doc = document.documentElement;
                doc.setAttribute('data-useragent', scope.useragent.name);
                doc.setAttribute('data-platform', scope.useragent.platform);
                doc.className += ((scope.useragent.touch) ? ' touch' : ' no-touch');
            }
        };
    });