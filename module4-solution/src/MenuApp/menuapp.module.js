// 3. Create a file called menuapp.module.js and declare an Angular module to
//    match your ng-app declaration.
// 4. .... Make sure the MenuApp module lists the data module as a dependency.
(function () {
'use strict';

angular.module('MenuApp', ['ui.router', 'data']);

})();
