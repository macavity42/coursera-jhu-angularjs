(function() {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['profile', 'MenuService'];
function MyInfoController(profile, MenuService) {
	var $ctrl = this;
	$ctrl.profile = profile;
	
	if ($ctrl.registered) {
		$ctrl.favoriteMenuItem = MenuService.getMenuItem($ctrl.profile.favoriteItem);
	}
	
	$ctrl.registered = function () {
		return $ctrl.profile != undefined;
	}
}
	
})();