define(function() {
    return function(controller) {
        var headerMaster = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "10%",
            "id": "headerMaster",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        headerMaster.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "80%",
            "id": "imgLogo",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "bestlogo.png",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var headerBorder = new kony.ui.Label({
            "bottom": 0,
            "height": "2dp",
            "id": "headerBorder",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0g1c86136f32049",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "renderAsAnchor": false,
            "textCopyable": false
        });
        headerMaster.add(imgLogo, headerBorder);
        return headerMaster;
    }
})