define("frmHome", function() {
    return function(controller) {
        function addWidgetsfrmHome() {
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
            var flxScrollMainContent = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "95%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollMainContent",
                "isVisible": false,
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
            var lblNavigation = new kony.ui.Label({
                "id": "lblNavigation",
                "isVisible": true,
                "left": "2.50%",
                "skin": "CopydefLabel0a378fac47ff946",
                "text": "Path",
                "textStyle": {},
                "top": "4%",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            kony.mvc.registry.add('FBox0b64a11ff005748', 'FBox0b64a11ff005748', 'FBox0b64a11ff005748Controller');
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
                "height": "90%",
                "id": "sgmCategories",
                "isVisible": true,
                "left": "0dp",
                "minHeight": "90%",
                "minWidth": "100%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_hcba23029f0b4eb48195bc14c0e0bffd,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "FBox0b64a11ff005748",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "4%",
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
            flxScrollMainContent.add(lblNavigation, sgmCategories);
            var searchComponent = new com.qualifacts.training.search({
                "clipBounds": true,
                "height": "110%",
                "id": "searchComponent",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyslFbox0a5acb05636ae4a",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            searchComponent.onClickCancel = controller.AS_UWI_f851c8e168a748f9a185474d69e867c6;
            searchComponent.onDoneSearch = controller.AS_UWI_d0e701d1d95e4b56848ee5fb0140d127;
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
                "width": "15%",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var btnBack = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0g82f09f6073847",
                "height": "100%",
                "id": "btnBack",
                "isVisible": true,
                "left": "0%",
                "onClick": controller.AS_Button_e34ce3db584944e486e23de8a11b419d,
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
                "skin": "CopyslFontAwesomeIcon0cf028535bddd45",
                "text": "",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
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
                "width": "20%",
                "zIndex": 99999
            }, {}, {});
            flxSearchBtn.setDefaultUnit(kony.flex.DP);
            var btnSearch = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0g82f09f6073847",
                "height": "100%",
                "id": "btnSearch",
                "isVisible": true,
                "onClick": controller.AS_Button_i0aefb29b93b4a148c888cf277dc7f80,
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
                "height": "40dp",
                "id": "Search",
                "isVisible": true,
                "right": "0%",
                "skin": "CopyslFontAwesomeIcon0d752495d828c47",
                "text": "",
                "textStyle": {},
                "top": "0%",
                "width": "33dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "renderAsAnchor": false,
                "textCopyable": false
            });
            flxSearchBtn.add(btnSearch, Search);
            this.add(headerMaster, flxScrollMainContent, searchComponent, flxBack, flxSearchBtn);
        };
        return [{
            "addWidgets": addWidgetsfrmHome,
            "enabledForIdleTimeout": false,
            "id": "frmHome",
            "init": controller.AS_Form_id2443f901914c4cbbf5b06bea18dea9,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ie158b5df33b462991c21067135d9088,
            "skin": "CopyslForm0d8461e8bd4c94c"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "inTransitionConfig": {
                "formTransition": "none"
            },
            "retainScrollPosition": false
        }]
    }
});