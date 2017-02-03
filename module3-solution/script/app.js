(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService', '$scope'];
function NarrowItDownController(MenuSearchService, $scope) {
  var nidc = this;
  nidc.found = null;     // Won't display "Nothing found" on startup.
  nidc.searchTerm = "";

  nidc.narrowDown = function() {
    var promise = MenuSearchService.getMatchedMenuItems(nidc.searchTerm);
    promise.then(function (response) {
      nidc.found = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  nidc.remove = function(itemIndex) {
      MenuSearchService.removeItem(itemIndex);
  };

};

MenuSearchService.$inject = ['$http', '$q', 'ApiBasePath'];
function MenuSearchService($http, $q, ApiBasePath) {
  var service = this;
  var foundItems;

  service.getMatchedMenuItems = function (searchTerm) {
    foundItems = [];
    // If an empty search term is provided, return a promise with an empty array
    if( searchTerm === "" ) return $q.resolve( foundItems );
    // Otherwise, get and return the data
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then (function (result) {
      result.data.menu_items.forEach( function(item) {
        if( item.description.includes(searchTerm) ) foundItems.push(item);
      });
      return foundItems;
    });
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };

}


})();
