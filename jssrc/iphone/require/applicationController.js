define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.qualifacts.training.headerMaster", "headerMaster", "headerMasterController");
        kony.application.registerMaster({
            "namespace": "com.qualifacts.training",
            "classname": "headerMaster",
            "name": "com.qualifacts.training.headerMaster"
        });
        kony.mvc.registry.add("com.qualifacts.training.search", "search", "searchController");
        kony.application.registerMaster({
            "namespace": "com.qualifacts.training",
            "classname": "search",
            "name": "com.qualifacts.training.search"
        });
        kony.mvc.registry.add("flxContent", "flxContent", "flxContentController");
        kony.mvc.registry.add("flxSgmContainer", "flxSgmContainer", "flxSgmContainerController");
        kony.mvc.registry.add("frmHome", "frmHome", "frmHomeController");
        kony.mvc.registry.add("frmProductDetail", "frmProductDetail", "frmProductDetailController");
        kony.mvc.registry.add("frmProductList", "frmProductList", "frmProductListController");
        kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
        kony.application.setDefaultTextboxPadding(false);
        kony.application.setRespectImageSizeForImageWidgetAlignment(true);
        setAppBehaviors();
    },
    postAppInitCallBack: function() {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmHome").navigate();
    }
});