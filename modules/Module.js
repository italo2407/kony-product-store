//Type your code here
var serviceData;

function invokeServiceIntegration(inputRequest){
  kony.print(JSON.stringify(inputRequest));
  var promise=new Promise(function(resolve,reject){
  	var integrationObj=KNYMobileFabric.getIntegrationService(inputRequest.serviceName);
	integrationObj.invokeOperation(inputRequest.operationName,inputRequest.headers,inputRequest.data,
    	function operationSuccess(response){
      		kony.print(JSON.stringify(response));
      		resolve(response);  		  
    	},
        function operationFailure(error){
      		reject(error);
    	}
    );	  
  });
  return promise;
}

function buildInputRequest(serviceName,operationName,headers,data){
  var input= {	serviceName:serviceName,
               	operationName:operationName,
             	headers:headers,
             	data:data
             };
  
  return input;
}

function navigationForm(form,data,origin){
  var params={"data":data,"origin":origin};
  var navObj=new kony.mvc.Navigation(form);
  navObj.navigate(params);
}

