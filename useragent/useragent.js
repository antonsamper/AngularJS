/**
 * @name useragent
 * @author Anton Samper Rivaya (@antonsamper)
 * @version 0.0.1
 * @description Add useragent and platform attributes, and output touch support as a class on the html tag.
 **/
angular.module('useragent', []).
    directive('html', function () {
        return {
            restrict: 'E',
            link: function () {
                var doc = document.documentElement;
                doc.setAttribute('data-useragent', navigator.userAgent);
                doc.setAttribute('data-platform', navigator.platform);
                doc.className += ((!!('ontouchstart' in window) || !!('onmsgesturechange' in window)) ? ' touch' : ' no-touch');
            }
        };
    });