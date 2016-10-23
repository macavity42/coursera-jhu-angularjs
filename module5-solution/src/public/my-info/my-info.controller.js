(function() {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['profile', 'ApiPath'];
function MyInfoController(profile, ApiPath) {
	var $ctrl = this;
	$ctrl.profile = profile;
	$ctrl.basePath = ApiPath;
	
	$ctrl.registered = function () {
		return $ctrl.profile != undefined;
	}
}
	
})();