define("frmProductList", function() {
    return function(controller) {
        function addWidgetsfrmProductList() {
            this.setDefaultUnit(kony.flex.DP);
            var headerMaster = new com.qualifacts.training.headerMaster({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
            var lblProductHeader = new kony.ui.Label({
                "id": "lblProductHeader",
                "isVisible": true,
                "left": "17dp",
                "skin": "sknPathCategoryList",
                "text": "Label",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12.50%",
                "width": "94%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxScrollProductList = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollProductList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "18%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollProductList.setDefaultUnit(kony.flex.DP);
            var sgmProductList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgProduct": "imagedrag.png",
                    "lblAvgUserRating": "djskdjsdksjdkjs",
                    "lblNameProduct": "Label",
                    "lblOnSale": "ON SALE!",
                    "lblPrice": "Label"
                }, {
                    "imgProduct": "imagedrag.png",
                    "lblAvgUserRating": "djskdjsdksjdkjs",
                    "lblNameProduct": "Label",
                    "lblOnSale": "ON SALE!",
                    "lblPrice": "Label"
                }, {
                    "imgProduct": "imagedrag.png",
                    "lblAvgUserRating": "djskdjsdksjdkjs",
                    "lblNameProduct": "Label",
                    "lblOnSale": "ON SALE!",
                    "lblPrice": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "sgmProductList",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_f4f6a895fa4b440dbcc26b2dd6109fd2,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSgmContainer",
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
                    "flexDetail": "flexDetail",
                    "flxPrice": "flxPrice",
                    "flxSgmContainer": "flxSgmContainer",
                    "imgProduct": "imgProduct",
                    "lblAvgUserRating": "lblAvgUserRating",
                    "lblNameProduct": "lblNameProduct",
                    "lblOnSale": "lblOnSale",
                    "lblPrice": "lblPrice"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrollProductList.add(sgmProductList);
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
                "onClick": controller.AS_Button_b5833db9c66d40e289de04e6a61f7f86,
                "skin": "CopydefBtnNormal0g82f09f6073847",
                "top": "0dp",
                "width": "100%",
                "zIndex": 9999
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBack = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblBack",
                "isVisible": true,
                "skin": "sknBackIcon",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBack.add(btnBack, lblBack);
            this.add(headerMaster, lblProductHeader, flxScrollProductList, flxBack);
        };
        return [{
            "addWidgets": addWidgetsfrmProductList,
            "enabledForIdleTimeout": false,
            "id": "frmProductList",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_ca097d10a903466cbc81582e0de2d65d,
            "skin": "CopyslForm0cea54d45708444"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "onDeviceBack": controller.AS_Form_e6690197092e4de4b5b02accb9a77d6e,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});