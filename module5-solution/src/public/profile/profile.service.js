(function () {
"use strict";
	
angular.module('public')
.service('ProfileService', ProfileService);
	
function ProfileService() {
	var service = this;

	service.setProfile = function (profile) {
		service.profile = profile;
	}
	
	service.getProfile = function () {
		return service.profile;
	}
}	
	
})();