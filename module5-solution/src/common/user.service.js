(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$http', '$q', 'ApiPath'];
function UserService($http, $q, ApiPath) {
  var service = this;
  service.user = null;

  // Caching short_name and response
  service.shortNameCached = "";
  service.shortNameResponseCached = {};

  service.saveUser = function ( user ) {
    service.user = user;
  };

  service.getUser = function () {
    return service.user;
  };

  service.getUserFavoriteDishItem = function () {
    console.log("getUserFavoriteDishItem");
    if(service.user) {
      return  service.getDishItem(service.user.menunumber);
    }
    else {
      return $q.when({"user.menunumber":""});
    };
  };

  service.getDishItem = function (short_name) {
    console.log("getDishItem", short_name, ", Cached:", service.shortNameCached);
    if(service.shortNameCached === short_name) {
      console.log("getDishItem - cached: ", short_name);
      return $q.when(service.shortNameResponseCached);
    };
    service.shortNameCached = short_name;

    var capValue = short_name.toUpperCase();
      return $http.get(ApiPath + '/menu_items/' + capValue + '.json')
                .success(function (response) {
                  console.log("getDishItem - Response success", response);
                  service.shortNameResponseCached = response;
                  return response;
                })
                .error(function() {
                  console.log("getDishItem - Response error");
                  service.shortNameCached = "";
                  service.shortNameResponseCached = {};
                });

  };

}

})();
