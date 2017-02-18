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
    UserService.saveUser(signupCtrl.user);
    signupCtrl.infoSaved = true;
  };

}

})();
