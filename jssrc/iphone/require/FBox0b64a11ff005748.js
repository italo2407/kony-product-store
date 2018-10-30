define("FBox0b64a11ff005748", function() {
    return function(controller) {
        FBox0b64a11ff005748 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "55dp",
            "id": "FBox0b64a11ff005748",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "width": "100%"
        }, {
            "containerWeight": 100
        }, {});
        FBox0b64a11ff005748.setDefaultUnit(kony.flex.DP);
        var lblCategoryName = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblCategoryName",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0f752c55cb1c54a",
            "text": "Label",
            "textStyle": {},
            "top": "0dp",
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
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        FBox0b64a11ff005748.add(lblCategoryName);
        return FBox0b64a11ff005748;
    }
})