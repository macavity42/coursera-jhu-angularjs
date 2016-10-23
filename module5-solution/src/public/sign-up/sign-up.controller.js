(function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['ProfileService'];
function SignUpController(ProfileService) {
	var $ctrl = this;
	$ctrl.profile = ProfileService.getProfile();
	
	$ctrl.submit = function() {
		ProfileService.setProfile($ctrl.profile);
		$ctrl.infoSaved = true;
	};
}

})();