(function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['ProfileService', 'MenuService'];
function SignUpController(ProfileService, MenuService) {
	var $ctrl = this;
	$ctrl.profile = ProfileService.getProfile();
	
	$ctrl.submit = function() {
		if ($ctrl.profile == undefined) return;
		MenuService.getMenuItem($ctrl.profile.favoriteDish).then(function(response) {
			$ctrl.profile.favoriteMenuItem = response.data;

			ProfileService.setProfile($ctrl.profile);
			$ctrl.infoSaved = true;
			$ctrl.noSuchMenuItem = false;			
		})
		.catch(function() {
			$ctrl.infoSaved = false;
			$ctrl.noSuchMenuItem = true;
		});
		
	};
}

})();