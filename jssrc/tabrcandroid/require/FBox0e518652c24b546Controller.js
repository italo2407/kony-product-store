define(function(){
	var controller = require("userFBox0e518652c24b546Controller");
	var controllerActions = ["FBox0e518652c24b546ControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})