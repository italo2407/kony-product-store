define("FBox0e518652c24b546", function() {
    return function(controller) {
        FBox0e518652c24b546 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "70dp",
            "id": "FBox0e518652c24b546",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "width": "100%"
        }, {
            "containerWeight": 100
        }, {});
        FBox0e518652c24b546.setDefaultUnit(kony.flex.DP);
        var lblCategoryName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCategoryName",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0h33056703ae446",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "containerWeight": 100,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "hExpand": true,
            "margin": [1, 1, 1, 1],
            "marginInPixel": false,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false,
            "vExpand": false,
            "widgetAlignment": constants.WIDGET_ALIGN_CENTER
        }, {
            "textCopyable": false
        });
        FBox0e518652c24b546.add(lblCategoryName);
        return FBox0e518652c24b546;
    }
})