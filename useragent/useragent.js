/**
 * @name useragent
 * @author Anton Samper Rivaya (@antonsamper)
 * @version 0.0.4
 * @description Adds the user agent and platform attributes, as well as outputting touch support as a class on the bootstrap element.
 * @requires angular
 **/
(function(app) {

    app.run(['$rootScope', function($rootScope) {
        $rootScope.useragent = {
            browser:    navigator.userAgent,
            platform:   navigator.platform,
            touch:      (!!('ontouchstart' in window) || !!('onmsgesturechange' in window))
        };
    }]);
    
    app.factory('useragentProperties', ['$rootScope', function($rootScope) {
        return $rootScope.useragent;
    }]);
    
    app.directive('ngApp', function () {
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

}(angular.module('useragent', [])));