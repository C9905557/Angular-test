// 6. Create categories.component.js file and create component called categories that
//    shows all available categories in the menu to the user.

(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/MenuApp/templates/categories.component.template.html',
  bindings: {
    items: '<'
  }
});

})();
