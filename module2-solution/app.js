(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var itemBuyer = this;

  this.items = function () {
    return ShoppingListCheckOffService.getItemsToBuy();
  }

  itemBuyer.checkOffItem = function (itemIndex) {
    ShoppingListCheckOffService.itemBought(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBoughtLister = this;

  itemBoughtLister.items = ShoppingListCheckOffService.getItemsBought();

  this.items = function () {
    return ShoppingListCheckOffService.getItemsBought();
  }
}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
    {name: 'Cookies', quantity: 11},
    {name: 'Chips', quantity: 3},
    {name: 'Sugary drinks', quantity: 6},
    {name: 'Chocolate bars', quantity: 5},
    {name: 'Candies', quantity: 25},
    {name: 'Cakes', quantity: 4}
  ];
  var itemsBougth = [];

  service.itemBought = function (itemIndex) {
    var itemRemovedArray = itemsToBuy.splice (itemIndex, 1);
    itemsBougth.push (itemRemovedArray[0]);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBougth;
  };

}

})();
