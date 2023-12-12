define([], function () {
	var configLocal = {};

	// WebAPI
	configLocal.api = {
		name: 'OHDSI',
		url: '${WEBAPI_URL}'
	};

	configLocal.cohortComparisonResultsEnabled = false;
	configLocal.userAuthenticationEnabled = false;
	configLocal.plpResultsEnabled = false;
	
	configLocal.appDataSources = true; 
	configLocal.appSearch = true;     
	configLocal.appCohortDefinitions = true;  
	configLocal.appCharacterizations = true;  
	configLocal.appCohortPathways = false;    
	configLocal.appIncidenceRates = false;    
	configLocal.appProfiles = false;  
	configLocal.appEstimation = false; 
	configLocal.appPrediction = false; 
	configLocal.appReusables = false; 

	return configLocal;
});
