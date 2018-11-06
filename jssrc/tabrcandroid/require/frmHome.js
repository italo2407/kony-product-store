define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
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
            var flxScrollMainContent = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "95%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollMainContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "minHeight": "95%",
                "minWidth": "100%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "10%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScrollMainContent.setDefaultUnit(kony.flex.DP);
            var flxMainContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainContent",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContent.setDefaultUnit(kony.flex.DP);
            var lblNavigation = new kony.ui.Label({
                "id": "lblNavigation",
                "isVisible": true,
                "left": "2.50%",
                "skin": "sknPathHomeTab",
                "text": "Path",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            kony.mvc.registry.add('FBox0e518652c24b546', 'FBox0e518652c24b546', 'FBox0e518652c24b546Controller');
            var sgmCategories = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "lblCategoryName": "Label"
                }, {
                    "lblCategoryName": "Label"
                }, {
                    "lblCategoryName": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "sgmCategories",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_ca2136a5d0fb4cc9b5cfa4c8993d0b46,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "FBox0e518652c24b546",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "10%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "lblCategoryName": "lblCategoryName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContent.add(lblNavigation, sgmCategories);
            flxScrollMainContent.add(flxMainContent);
            var searchComponent = new com.qualifacts.training.search({
                "clipBounds": true,
                "height": "100%",
                "id": "searchComponent",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0a5acb05636ae4a",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            searchComponent.onClickCancel = controller.AS_UWI_gf01d33283f643c19ca8497a1ffb684e;
            searchComponent.onDoneSearch = controller.AS_UWI_i56f43ede5aa424ba0072c22bbd951f8;
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxBack",
                "isVisible": false,
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
                "onClick": controller.AS_Button_dca9af85ff464ba1af20ecce4ec8b681,
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
            var flxSearchBtn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flxSearchBtn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "0%",
                "skin": "slFbox",
                "top": "4dp",
                "width": "15%",
                "zIndex": 99999
            }, {}, {});
            flxSearchBtn.setDefaultUnit(kony.flex.DP);
            var btnSearch = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0g82f09f6073847",
                "height": "100%",
                "id": "btnSearch",
                "isVisible": true,
                "onClick": controller.AS_Button_d75a6341d94440b899e4a0a41d97e95c,
                "right": "0%",
                "skin": "CopydefBtnNormal0g82f09f6073847",
                "top": "0dp",
                "width": "100%",
                "zIndex": 99999
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Search = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Search",
                "isVisible": true,
                "right": "0%",
                "skin": "sknSearchIcon",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSearchBtn.add(btnSearch, Search);
            this.add(headerMaster, flxScrollMainContent, searchComponent, flxBack, flxSearchBtn);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "init": controller.AS_Form_d31651d4a22945859e2a6b098d92f9cd,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_bc8d7c51af154f839a52d23904bfdc56,
            "skin": "CopyslForm0d4c27819aef74f"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "onDeviceBack": controller.AS_Form_gb0a8db7101d4f01abad2e233242d889,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});