define("flxContent", function() {
    return function(controller) {
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "CopyslFbox0f776fda26eda4a",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0e626bc89c7544e",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxRatingContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxRatingContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "10%",
            "skin": "slFbox",
            "top": "7dp",
            "width": "35%",
            "zIndex": 1
        }, {}, {});
        flxRatingContent.setDefaultUnit(kony.flex.DP);
        var flxRating = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxRating",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "150dp",
            "zIndex": 1
        }, {}, {});
        flxRating.setDefaultUnit(kony.flex.DP);
        var imgRating = new kony.ui.Image2({
            "height": "30dp",
            "id": "imgRating",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "start.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxUnfilledStart = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "flxUnfilledStart",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "right": "0dp",
            "skin": "CopyslFbox0f737de3803c846",
            "top": "0dp",
            "width": "88%",
            "zIndex": 1
        }, {}, {});
        flxUnfilledStart.setDefaultUnit(kony.flex.DP);
        flxUnfilledStart.add();
        flxRating.add(imgRating, flxUnfilledStart);
        var lblRating = new kony.ui.Label({
            "id": "lblRating",
            "isVisible": true,
            "left": "20dp",
            "skin": "CopydefLabel0b82f6ea1bb6248",
            "text": "5",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "1dp",
            "width": "35%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxRatingContent.add(flxRating, lblRating);
        flxHeader.add(lblName, flxRatingContent);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0d5380e5beba843",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDate = new kony.ui.Label({
            "id": "lblDate",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0a6975310b5484e",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDescription = new kony.ui.Label({
            "bottom": "10dp",
            "id": "lblDescription",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0d8311c11758646",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxContent.add(flxHeader, lblTitle, lblDate, lblDescription);
        return flxContent;
    }
})