(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['category', 'itemsData'];
function ItemsController(category, itemsData) {
//ItemsController.$inject = ['itemsData'];
//function ItemsController(itemsData) {

  var itemsCtrl = this;
  itemsCtrl.category = category ; //"TBD";
  itemsCtrl.items = itemsData.menu_items;

}

})();
