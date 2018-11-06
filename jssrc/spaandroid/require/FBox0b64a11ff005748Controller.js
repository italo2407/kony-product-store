define(function(){
	var controller = require("userFBox0b64a11ff005748Controller");
	var controllerActions = ["FBox0b64a11ff005748ControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})