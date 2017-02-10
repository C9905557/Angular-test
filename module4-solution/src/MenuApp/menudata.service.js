// 5. Create menudata.service.js file and create a service called MenuDataService in it.
// This service should be declared on the data module, not on the MenuApp module.
// The MenuDataService should have 2 methods:
//
//  - getAllCategories - this method should return a promise which is a result
//    of using the $http service, using the following REST API endpoint:
//    https://davids-restaurant.herokuapp.com/categories.json
//
//  - getItemsForCategory(categoryShortName) - this method should return a promise
//    which is a result of using the $http service, using the following REST API
//    endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=,
//    where, before the call to the server, your code should append whatever
//    categoryShortName value was passed in as an argument into the getItemsForCategory method.

(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    })
  };

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
    })
  };
}

})();
