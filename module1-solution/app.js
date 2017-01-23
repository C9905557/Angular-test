(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.text = "";
  $scope.message= "";
  $scope.messageClass = "";

  $scope.checkIfTooMuch = function () {
    var text = $scope.text;
    var message = "";
    var messageClass = "messageOk";
    if( text.length === 0) {
      message = "Please enter data first";
      messageClass = "messageNok";
    }
    else {
      // Eliminate the white spaces with replace,
      // also eliminate the ending commas if any,
      // split over one or many commas ang get the length os the array
      var cntItems = text.replace(/\s+/g,'').replace(/,+$/,'').split(/,+/).length;
      if( cntItems <= 3 ) message = "Enjoy!";
      else message =  "Too much!";
    }
    $scope.message = message;
    $scope.messageClass = messageClass;
  };
}

})();
