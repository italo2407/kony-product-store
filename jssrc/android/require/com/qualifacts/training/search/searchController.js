define(function() {
    var controller = require("com/qualifacts/training/search/usersearchController");
    var actions = require("com/qualifacts/training/search/searchControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "searchValue", function(val) {
            this.view.txtSearch.text = val;
        });
        defineGetter(this, "searchValue", function() {
            return this.view.txtSearch.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onDoneSearch_c97e2fb9d5a04e18b4b05a0c68516a65 = function() {
        if (this.onDoneSearch) {
            this.onDoneSearch.apply(this, arguments);
        }
    }
    controller.AS_onClickCancel_g0ac3ced035743a9a6d1a30f0f6bcef0 = function() {
        if (this.onClickCancel) {
            this.onClickCancel.apply(this, arguments);
        }
    }
    return controller;
});