(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

})();

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
	  // TODO: this method should return a promise which is a 
	  // result of using the $http service, using the 
	  // following REST API endpoint: 
	  // https://davids-restaurant.herokuapp.com/categories.json
	  return ['1', '2'];
  };
  
  service.getItemsForCategory = function(categoryShortName) {
	  // TODO:  this method should return a promise which is a 
	  // result of using the $http service, using the following 
	  // REST API endpoint: 
	  // https://davids-restaurant.herokuapp.com/menu_items.json?category=
	  return ['3', '4'];
  };
}