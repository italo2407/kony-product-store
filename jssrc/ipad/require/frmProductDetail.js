define("frmProductDetail", function() {
    return function(controller) {
        function addWidgetsfrmProductDetail() {
            this.setDefaultUnit(kony.flex.DP);
            var headerMaster = new com.qualifacts.training.headerMaster({
                "clipBounds": true,
                "height": "10%",
                "id": "headerMaster",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "12.50%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var btnBack = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0g82f09f6073847",
                "height": "100%",
                "id": "btnBack",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_bc7ec4f16a61426a9cdce7632f907b23,
                "skin": "CopydefBtnNormal0g82f09f6073847",
                "top": "0dp",
                "width": "100%",
                "zIndex": 9999
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            var lblBack = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblBack",
                "isVisible": true,
                "skin": "sknBackIcon",
                "text": "",
                "textStyle": {},
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
            flxBack.add(btnBack, lblBack);
            var flxMainContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "flxMainContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContent.setDefaultUnit(kony.flex.DP);
            var flxDetailProductContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDetailProductContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "CopyslFbox0g9cb65fd029549",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDetailProductContent.setDefaultUnit(kony.flex.DP);
            var flxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContent.setDefaultUnit(kony.flex.DP);
            var imgProduct = new kony.ui.Image2({
                "height": "150dp",
                "id": "imgProduct",
                "isVisible": true,
                "left": "20dp",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "10dp",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDetailProduct = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDetailProduct",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "67%",
                "zIndex": 1
            }, {}, {});
            flxDetailProduct.setDefaultUnit(kony.flex.DP);
            var lblName = new kony.ui.Label({
                "id": "lblName",
                "isVisible": true,
                "left": "35dp",
                "skin": "CopydefLabel0ed480f3616764d",
                "text": "Label",
                "textStyle": {},
                "top": "8dp",
                "width": "85%",
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
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "35dp",
                "skin": "slFbox",
                "top": "5dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxPrice.setDefaultUnit(kony.flex.DP);
            var lblPrice = new kony.ui.Label({
                "id": "lblPrice",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0edf3d6c27b3447",
                "text": "Label",
                "textStyle": {},
                "top": "3dp",
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
            var lblOnsale = new kony.ui.Label({
                "id": "lblOnsale",
                "isVisible": true,
                "left": "20%",
                "skin": "CopydefLabel0fa5cf15d13794c",
                "text": "ON SALE!",
                "textStyle": {},
                "top": "0dp",
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
            flxPrice.add(lblPrice, lblOnsale);
            var flxAveReview = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxAveReview",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAveReview.setDefaultUnit(kony.flex.DP);
            var flxRating = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30dp",
                "id": "flxRating",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "35dp",
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
                "skin": "CopyslFbox0b4fb185776e947",
                "top": "0dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            flxUnfilledStart.setDefaultUnit(kony.flex.DP);
            flxUnfilledStart.add();
            flxRating.add(imgRating, flxUnfilledStart);
            var lblAveReview = new kony.ui.Label({
                "id": "lblAveReview",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0f5b6f70ec3234b",
                "text": "Label",
                "textStyle": {},
                "top": "2dp",
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
            flxAveReview.add(flxRating, lblAveReview);
            flxDetailProduct.add(lblName, flxPrice, flxAveReview);
            flxContent.add(imgProduct, flxDetailProduct);
            var flxDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxDescription",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "3dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDescription.setDefaultUnit(kony.flex.DP);
            var lblDescripcion = new kony.ui.Label({
                "id": "lblDescripcion",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0c4a5ae6f56b648",
                "text": "Label",
                "textStyle": {},
                "top": "8dp",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flxDescription.add(lblDescripcion);
            flxDetailProductContent.add(flxContent, flxDescription);
            var lblNumberReview = new kony.ui.Label({
                "bottom": "10dp",
                "id": "lblNumberReview",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0ida550097cf642",
                "text": "t",
                "textStyle": {},
                "top": "15dp",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flxScrollReviewUserContent = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "71%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollReviewUserContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0c06aa7660dfe40",
                "top": "2dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollReviewUserContent.setDefaultUnit(kony.flex.DP);
            var sgmReviews = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgRating": "start.png",
                    "lblDate": "Label",
                    "lblDescription": "Label",
                    "lblName": "Label",
                    "lblRating": "5",
                    "lblTitle": "Label"
                }, {
                    "imgRating": "start.png",
                    "lblDate": "Label",
                    "lblDescription": "Label",
                    "lblName": "Label",
                    "lblRating": "5",
                    "lblTitle": "Label"
                }, {
                    "imgRating": "start.png",
                    "lblDate": "Label",
                    "lblDescription": "Label",
                    "lblName": "Label",
                    "lblRating": "5",
                    "lblTitle": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "sgmReviews",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxContent",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxContent": "flxContent",
                    "flxHeader": "flxHeader",
                    "flxRating": "flxRating",
                    "flxRatingContent": "flxRatingContent",
                    "flxUnfilledStart": "flxUnfilledStart",
                    "imgRating": "imgRating",
                    "lblDate": "lblDate",
                    "lblDescription": "lblDescription",
                    "lblName": "lblName",
                    "lblRating": "lblRating",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "bounces": true,
                "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
                "enableDictionary": false,
                "indicator": constants.SEGUI_NONE,
                "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
                "showProgressIndicator": true
            });
            flxScrollReviewUserContent.add(sgmReviews);
            flxMainContent.add(flxDetailProductContent, lblNumberReview, flxScrollReviewUserContent);
            this.add(headerMaster, flxBack, flxMainContent);
        };
        return [{
            "addWidgets": addWidgetsfrmProductDetail,
            "enabledForIdleTimeout": false,
            "id": "frmProductDetail",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_cc58a33280044843865e92b4d2ae43fe,
            "skin": "CopyslForm0g07d48bf196d46"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});