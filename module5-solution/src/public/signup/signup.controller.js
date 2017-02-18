(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var signupCtrl = this;
  signupCtrl.user = {};
  signupCtrl.infoSaved = false;

  signupCtrl.submit = function () {
    console.log("Submitted!", signupCtrl.user);
    UserService.saveUser(signupCtrl.user);
    signupCtrl.infoSaved = true;
    console.log("User saved: ", UserService.getUser());
  };

}

})();
