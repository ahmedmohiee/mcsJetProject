define(['mcs'], function(mcs){
	var mcs_config = {
  "logLevel": mcs.LOG_LEVEL.INFO,
  "logHTTP": true,
  "mobileBackends": {
    "mcsJet": {
      "default": true,
      "baseUrl": "https://mcs-gse00011723.mobileenv.us2.oraclecloud.com:443",
      "applicationKey": "02f5dab3-407c-456a-bf67-c83d73d56643",
        "authorization": {
        "basicAuth": {
          "backendId": "69506791-223c-4c95-bac8-fbb1d360b685",
          "anonymousToken": "R1NFMDAwMTE3MjNfTUNTX01PQklMRV9BTk9OWU1PVVNfQVBQSUQ6bzRvdW5neURxLmpsMG0="
        }          
      }
    }
  },
  // "sync": {
  //   "periodicRefreshPolicy": "PERIODIC_REFRESH_POLICY_REFRESH_NONE",
  //   "policies": [
  //     {
  //       "path": '/mobile/custom/firstApi/tasks',
  //       "fetchPolicy": 'FETCH_FROM_SERVICE_ON_CACHE_MISS'
  //     },
  //     {
  //       "path": '/mobile/custom/secondApi/tasks',
  //     }
  //   ]
  // },
 

};

	
	
	function McsConfig(){
		var self = this;
		
    // mcs.MobileBackendManager.platform = new mcs.CordovaPlatform();
     mcs.MobileBackendManager.setConfig(mcs_config);
     self.MobileBackend = mcs.MobileBackendManager.getMobileBackend("mcsJet");
     self.MobileBackend.setAuthenticationType("basicAuth");
	 
	}
	
	return new McsConfig();
});