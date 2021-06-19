define([], function () {
	var configLocal = {};
	// WebAPI
	configLocal.api = {
		name: 'Gen3',
		url: 'https://atlas-qa-mickey.planx-pla.net/WebAPI/'
	};
	configLocal.authProviders = [{
		"name": "Fence",
		"url": "user/login/openid",
		"ajax": false,
		"icon": "fa fa-openid"
	}];
	configLocal.cohortComparisonResultsEnabled = false;
	configLocal.userAuthenticationEnabled = true;
	configLocal.plpResultsEnabled = false;
	return configLocal;
});
