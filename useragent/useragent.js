/**
 * @name useragent
 * @author Anton Samper Rivaya (@antonsamper)
 * @version 0.0.3
 * @description Adds the user agent and platform attributes, as well as outputting touch support as a class on the bootstrap element.
 **/
angular.module('useragent', [])
    .run(['$rootScope', function($rootScope) {
        $rootScope.useragent = {
            browser:    navigator.userAgent,
            platform:   navigator.platform,
            touch:      (!!('ontouchstart' in window) || !!('onmsgesturechange' in window))
        };
    }])
    .factory('useragentProperties', ['$rootScope', function($rootScope) {
        return $rootScope.useragent;
    }])
    .directive('ngApp', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element
                    .attr('data-browser', scope.useragent.browser)
                    .attr('data-platform', scope.useragent.platform)
                    .addClass((scope.useragent.touch) ? 'touch' : 'no-touch');
            }
        };
    });