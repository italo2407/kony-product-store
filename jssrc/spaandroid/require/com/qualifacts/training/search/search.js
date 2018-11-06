define(function() {
    return function(controller) {
        var search = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "search",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_d717c9eb2cd8496e98237f1bbefbf1a7,
            "skin": "CopyslFbox0a5acb05636ae4a",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        search.setDefaultUnit(kony.flex.DP);
        var flxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flxContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0e9f99799a8b54d",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxContent.setDefaultUnit(kony.flex.DP);
        var txtSearch = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerY": "50%",
            "focusSkin": "defTextBoxFocus",
            "height": "70%",
            "id": "txtSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "5%",
            "onDone": controller.AS_onDoneSearch_c97e2fb9d5a04e18b4b05a0c68516a65,
            "placeholder": "Search",
            "secureTextEntry": false,
            "skin": "CopydefTextBoxNormal0f1e97d606e8e4f",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "24dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoComplete": false,
            "autoCorrect": false
        });
        var btnCancel = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "CopydefBtnNormal0c6c3837de62447",
            "height": "50dp",
            "id": "btnCancel",
            "isVisible": true,
            "left": "77%",
            "onClick": controller.AS_onClickCancel_g0ac3ced035743a9a6d1a30f0f6bcef0,
            "skin": "CopydefBtnNormal0c6c3837de62447",
            "text": "Cancel",
            "top": "0dp",
            "width": "22%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxContent.add(txtSearch, btnCancel);
        search.add(flxContent);
        return search;
    }
})