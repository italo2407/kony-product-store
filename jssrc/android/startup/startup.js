//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "CertiProject",
    appName: "CertiProject",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.17.16.47",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "CertiProject",
    isturlbase: "https://qualifacts-dev.konycloud.com/services",
    isMFApp: true,
    appKey: "cefdc11c5a9b35727ce288ba3a34d49c",
    appSecret: "4d8e4aae4fb6d09fc414c1c4a0a56aac",
    serviceUrl: "https://100016535.auth.konycloud.com/appconfig",
    svcDoc: {
        "selflink": "https://100016535.auth.konycloud.com/appconfig",
        "app_version": "1.0",
        "integsvc": {
            "CertiServices": "https://qualifacts-dev.konycloud.com/services/CertiServices",
            "CertiServicesJson": "https://qualifacts-dev.konycloud.com/services/CertiServicesJson"
        },
        "service_doc_etag": "000001668E70F378",
        "appId": "d1b21ed7-0685-4cfe-af74-72e54ec4a694",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "BestBuyIB",
        "reportingsvc": {
            "session": "https://qualifacts-dev.konycloud.com/services/IST",
            "custom": "https://qualifacts-dev.konycloud.com/services/CMS"
        },
        "baseId": "90c1ccf3-6beb-4879-9f2c-df655e9b77f2",
        "app_default_version": "1.0",
        "services_meta": {
            "CertiServices": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://qualifacts-dev.konycloud.com/services/CertiServices"
            },
            "CertiServicesJson": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://qualifacts-dev.konycloud.com/services/CertiServicesJson"
            }
        }
    },
    svcDocRefresh: false,
    svcDocRefreshTimeSecs: -1,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://qualifacts-dev.konycloud.com/CertiProject/MWServlet",
    secureurl: "https://qualifacts-dev.konycloud.com/CertiProject/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 8100
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        showstartupform: function() {
            var startForm = new kony.mvc.Navigation("frmHome");
            startForm.navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;