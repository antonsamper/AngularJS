# AngularJS - useragent

A simple AngularJS module that adds the current useragent and platform as attributes on the `html` tag. Additionally, it runs a simple test to detect 'touch' support and outputs the result as a class also on the `html` tag. This module is based off [Rogie King's](http://rog.ie/) [HTML5 Boilerplate Add-on - CSS: User Agent Selectors](http://rog.ie/blog/html5-boilerplate-addon).

## Installation
1. Add the `useragent.js` file to the page
```html
<script src="useragent.js"></script>
```

2. Add the `useragent` module to your app 
```javascript
var myApp = angular.module('myApp', ['useragent']);
```

And that's it. You should now be able to see the something similar to the below.
```html
<html class="ng-scope no-touch" xmlns:ng="http://angularjs.org" ng-app="myApp" data-useragent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36" data-platform="MacIntel">
```
