(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var toBuy = this;
	
	toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();
	
	toBuy.buy = function(index) {
		ShoppingListCheckOffService.buyItem(index);
	}
	
	toBuy.isEverythingBought = function () {
		return toBuy.itemsToBuy.length == 0;
	}
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var alreadyBought = this;
	
	alreadyBought.itemsBought = ShoppingListCheckOffService.getItemsBought();
	
	alreadyBought.isNothingBought = function() {
		return alreadyBought.itemsBought.length == 0;
	}
}

function ShoppingListCheckOffService() {
	var service = this;
	
	var toBuy = [ 
		{ name: "cookies", quantity: 10 },
		{ name: "chips", quantity: 5 },
		{ name: "sodas", quantity: 7 },
		{ name: "crackers", quantity: 8 },
		{ name: "apples", quantity: 2 }
	];
	
	var bought = [];
	
	service.getItemsToBuy = function () {
		return toBuy;
	}

	service.getItemsBought = function () {
		return bought;
	}
	
	service.buyItem = function (index) {
		bought.push(toBuy[index]);
		toBuy.splice(index, 1); // removes item with index
	}
}


})();
