# AngularJS - useragent

A simple AngularJS module that adds the current useragent and platform as attributes on the `html` tag. Additionally, it runs a simple test to detect 'touch' support and outputs the result as a class also on the `html` tag.
This module is based off [Rogie King's](http://rog.ie/) [HTML5 Boilerplate Add-on - CSS: User Agent Selectors](http://rog.ie/blog/html5-boilerplate-addon).

## Installation
1. Add the `useragent.js` file to the page
```html
<script src="useragent.js"></script>
```

2. Add the `useragent` module to your app 
```javascript
var myApp = angular.module('myApp', ['useragent']);
```

And that's it. You should now be able to see the the additional attributes and class name on your `html` tag.
```html
<html xmlns:ng="http://angularjs.org"
      ng-app="myApp"
      class="ng-scope no-touch"
      data-useragent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.107 Safari/537.36"
      data-platform="MacIntel">
```
## CSS usage
Once this is all in place, you can use this in your css to detect certain browsers/platforms/touch support and apply styles based on those.
```css
html[data-useragent*='Chrome'] body {
    background-color: #ed7169;
}

html[data-useragent*='Chrome/30.0'] body {
    background-color: #2ca08f;
}

html[data-platform='iPad'] body {
    background-color: #9fd0ec;
}

html.touch body {
    background-color: #dcc175;
}

html.no-touch body {
    background-color: #d677c7;
}
```

## JS usage
You can also user the useragent properties in your JavaScript by injection the `useragent` factory. You will now have access to the useragent object:
```javascript
myApp.run([useragent', function (useragent) {
    console.log(useragent.browser); //Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) App…L, like Gecko) Chrome/32.0.1700.107 Safari/537.36
    console.log(useragent.platfomr); //MacIntel
    console.log(useragent.touch); //false
}
```