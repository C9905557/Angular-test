(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['catData'];
function CategoriesController(catData) {
  var categoriesCtrl = this;
  categoriesCtrl.catItems = catData;
}

})();
