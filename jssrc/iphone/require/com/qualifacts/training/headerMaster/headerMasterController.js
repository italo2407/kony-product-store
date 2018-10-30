define(function() {
    var controller = require("com/qualifacts/training/headerMaster/userheaderMasterController");
    var actions = require("com/qualifacts/training/headerMaster/headerMasterControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});