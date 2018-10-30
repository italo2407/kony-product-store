define("flxSgmContainer", function() {
    return function(controller) {
        var flxSgmContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSgmContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0e5307bbad83a4d",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSgmContainer.setDefaultUnit(kony.flex.DP);
        var imgProduct = new kony.ui.Image2({
            "centerY": "60dp",
            "height": "70dp",
            "id": "imgProduct",
            "isVisible": true,
            "left": "25dp",
            "skin": "slImage",
            "src": "imagedrag.png",
            "width": "70dp",
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
            "left": "127dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "63%",
            "zIndex": 1
        }, {}, {});
        flexDetail.setDefaultUnit(kony.flex.DP);
        var lblNameProduct = new kony.ui.Label({
            "id": "lblNameProduct",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0gbb2351f8d6c49",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
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
            "skin": "sknlblPriceOnSale",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblOnSale = new kony.ui.Label({
            "id": "lblOnSale",
            "isVisible": true,
            "left": "50%",
            "skin": "CopydefLabel0c4ae54c0ea7c47",
            "text": "ON SALE!",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 2, 3, 2],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxPrice.add(lblPrice, lblOnSale);
        var lblAvgUserRating = new kony.ui.Label({
            "bottom": "5dp",
            "id": "lblAvgUserRating",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0jdae5856460941",
            "text": "djskdjsdksjdkjs",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexDetail.add(lblNameProduct, flxPrice, lblAvgUserRating);
        flxSgmContainer.add(imgProduct, flexDetail);
        return flxSgmContainer;
    }
})