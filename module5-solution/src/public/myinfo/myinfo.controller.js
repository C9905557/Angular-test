(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);


MyinfoController.$inject = ['UserService'];
function MyinfoController(UserService) {
  var myinfoCtrl = this;
  myinfoCtrl.user = UserService.getUser();

  if(myinfoCtrl.user) {
    myinfoCtrl.valid = true;
    UserService.getUserFavoriteDishItem().then( function(dishItem) {
      myinfoCtrl.dishItem = dishItem;
      console.log("myinfoCtrl.dishItem", myinfoCtrl.dishItem);
    });
  }
  else {
    myinfoCtrl.valid = false;
  };
  console.log("MyinfoController", myinfoCtrl.user, myinfoCtrl.valid)

}

})();
