define("flxSgmContainer", function() {
    return function(controller) {
        var flxSgmContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSgmContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0fc556136c49c4c",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSgmContainer.setDefaultUnit(kony.flex.DP);
        var imgProduct = new kony.ui.Image2({
            "centerY": "55dp",
            "height": "95dp",
            "id": "imgProduct",
            "isVisible": true,
            "left": "6%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "95dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexDetail = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexDetail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "25%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "70%",
            "zIndex": 1
        }, {}, {});
        flexDetail.setDefaultUnit(kony.flex.DP);
        var lblNameProduct = new kony.ui.Label({
            "id": "lblNameProduct",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0c38067ef483e49",
            "text": "Label",
            "textStyle": {},
            "top": "12dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var flxPrice = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxPrice",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3dp",
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxPrice.setDefaultUnit(kony.flex.DP);
        var lblPrice = new kony.ui.Label({
            "id": "lblPrice",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblPriceOnSaleTablet",
            "text": "Label",
            "textStyle": {},
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        var lblOnSale = new kony.ui.Label({
            "id": "lblOnSale",
            "isVisible": true,
            "left": "50%",
            "skin": "CopydefLabel0gefaf297cd614a",
            "text": "ON SALE!",
            "textStyle": {},
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 2, 3, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flxPrice.add(lblPrice, lblOnSale);
        var lblAvgUserRating = new kony.ui.Label({
            "bottom": "5dp",
            "id": "lblAvgUserRating",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0jdae5856460941",
            "text": "djskdjsdksjdkjs",
            "textStyle": {},
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false,
            "wrapping": constants.WIDGET_TEXT_WORD_WRAP
        });
        flexDetail.add(lblNameProduct, flxPrice, lblAvgUserRating);
        flxSgmContainer.add(imgProduct, flexDetail);
        return flxSgmContainer;
    }
})