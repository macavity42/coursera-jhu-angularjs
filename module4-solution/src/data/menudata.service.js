(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

})();

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
	var service = this;

	service.getAllCategories = function () {
		var serviceUrl = 'https://davids-restaurant.herokuapp.com/categories.json';
		return $http({url: serviceUrl}).then(function (result) {
			return result.data;
		});
	};
  
  service.getItemsForCategory = function(categoryShortName) {
		var serviceUrl = 'https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName;
		return $http({url: serviceUrl}).then(function (result) {
			return result.data.menu_items;
		});
  };
}