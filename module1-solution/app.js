(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.message = "";

  $scope.calculateMessage = function () {
	  if ($scope.dishes == "") {
		  $scope.message = "Please enter data first";
	  }
	  else {
	    var dishCount = $scope.dishes.split(',').length;
	    if (dishCount <= 3) {
	      $scope.message = "Enjoy!";
	    }
	    else {
		      $scope.message = "Too much!";	    	
	    }
	  }
  };
}


})();
