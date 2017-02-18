(function () {
"use strict";

angular.module('public')
.directive('menuNumber', MenuNumberDirective);

MenuNumberDirective.$inject = ['UserService'];
function MenuNumberDirective(UserService) {

  var ddo = {
    require: 'ngModel',
    link: MenuNumberDirectiveLink
  };

  function MenuNumberDirectiveLink(scope, element, attrs, controller) {
    controller.$asyncValidators.menuNumber = function(modelValue, viewValue) {
        return UserService.getDishItem(modelValue);
      };
    }

  return ddo;
}



})();
