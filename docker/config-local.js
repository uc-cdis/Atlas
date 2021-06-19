define([], function () {
	var configLocal = {};
	// WebAPI
	configLocal.api = {
		name: 'fence',
		url: 'https://atlas-qa-mickey.planx-pla.net/WebAPI/'
	};
	configLocal.authProviders = [{
		"name": "OpenID",
		"url": "user/login/openid",
		"ajax": false,
		"icon": "fa fa-openid"
	}];
	configLocal.cohortComparisonResultsEnabled = false;
	configLocal.userAuthenticationEnabled = true;
	configLocal.plpResultsEnabled = false;
	return configLocal;
});
