#!/bin/bash 
echo "<----- Start to run package.json ----->"
npm install
echo "<---------- End ---------->"

echo "<----- Set parameters on HeadlessBuild.properties ----->"
BUILD_MODE_PROPERTY="build.mode"
MOBILE_FABRIC_URL_PROPERTY="mobilefabric.url"
CLOUD_USERNAME_PROPERTY="cloud.username"
CLOUD_PASSWORD_PROPERTY="cloud.password"
ENVIRONMENT_NAME_PROPERTY="environment.name"
ACCOUNT_ID_PROPERTY="account.id"
MF_APP_NAME_PROPERTY="mf.appname"
ANDROID_MOBILE_NATIVE_PROPERTY="android"
ANDROID_TABLET_NATIVE_PROPERTY="androidtablet"
IOS_MOBILE_NATIVE_PROPERTY="iphone"
IOS_TABLET_NATIVE_PROPERTY="ipad"
ANDROID_MOBILE_SPA_PROPERTY="spa.android"
ANDROID_TABLET_SPA_PROPERTY="spa.androidtablet"
IOS_MOBILE_SPA_PROPERTY="spa.iphone"
IOS_TABLET_SPA_PROPERTY="spa.ipad"
ANDROID_PROTECTED_MODE_PROPERTY="protectedmodeenabled.android"
IOS_PROTECTED_MODE_PROPERTY="protectedmodeenabled.ios"
ANDROID_KEY_ALIAS_PROPERTY="keyAlias"
ANDROID_KEY_PASSWORD_PROPERTY="keyPassword"
ANDROID_KEYSTORE_PASSWORD_PROPERTY="keyStorePassword"

if [[ ! -z "${BUILD_MODE}" ]]; then
  echo "${BUILD_MODE_PROPERTY}=${BUILD_MODE}"
  awk -v pat="^${BUILD_MODE_PROPERTY}=" -v value="${BUILD_MODE_PROPERTY}=${BUILD_MODE}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${MOBILE_FABRIC_URL}" ]]; then
  echo "${MOBILE_FABRIC_URL_PROPERTY}=${MOBILE_FABRIC_URL}"
  awk -v pat="^${MOBILE_FABRIC_URL_PROPERTY}=" -v value="${MOBILE_FABRIC_URL_PROPERTY}=${MOBILE_FABRIC_URL}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${CLOUD_USERNAME}" ]]; then
  echo "${CLOUD_USERNAME_PROPERTY}=${CLOUD_USERNAME}"
  awk -v pat="^${CLOUD_USERNAME_PROPERTY}=" -v value="${CLOUD_USERNAME_PROPERTY}=${CLOUD_USERNAME}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${CLOUD_PASSWORD}" ]]; then
  echo "${CLOUD_PASSWORD_PROPERTY}=${CLOUD_PASSWORD}"
  awk -v pat="^${CLOUD_PASSWORD_PROPERTY}=" -v value="${CLOUD_PASSWORD_PROPERTY}=${CLOUD_PASSWORD}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${ENVIRONMENT_NAME}" ]]; then
  echo "${ENVIRONMENT_NAME_PROPERTY}=${ENVIRONMENT_NAME}"
  awk -v pat="^${ENVIRONMENT_NAME_PROPERTY}=" -v value="${ENVIRONMENT_NAME_PROPERTY}=${ENVIRONMENT_NAME}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${ACCOUNT_ID}" ]]; then
  echo "${ACCOUNT_ID_PROPERTY}=${ACCOUNT_ID}"
  awk -v pat="^${ACCOUNT_ID_PROPERTY}=" -v value="${ACCOUNT_ID_PROPERTY}=${ACCOUNT_ID}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${MF_APP_NAME}" ]]; then
  echo "${MF_APP_NAME_PROPERTY}=${MF_APP_NAME}"
  awk -v pat="^${MF_APP_NAME_PROPERTY}=" -v value="${MF_APP_NAME_PROPERTY}=${MF_APP_NAME}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${ANDROID_MOBILE_NATIVE}" ]]; then
  echo "${ANDROID_MOBILE_NATIVE_PROPERTY}=${ANDROID_MOBILE_NATIVE}"
  awk -v pat="^${ANDROID_MOBILE_NATIVE_PROPERTY}=" -v value="${ANDROID_MOBILE_NATIVE_PROPERTY}=${ANDROID_MOBILE_NATIVE}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${ANDROID_TABLET_NATIVE}" ]]; then
  echo "${ANDROID_TABLET_NATIVE_PROPERTY}=${ANDROID_TABLET_NATIVE}"
  awk -v pat="^${ANDROID_TABLET_NATIVE_PROPERTY}=" -v value="${ANDROID_TABLET_NATIVE_PROPERTY}=${ANDROID_TABLET_NATIVE}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${IOS_MOBILE_NATIVE}" ]]; then
  echo "${IOS_MOBILE_NATIVE_PROPERTY}=${IOS_MOBILE_NATIVE}"
  awk -v pat="^${IOS_MOBILE_NATIVE_PROPERTY}=" -v value="${IOS_MOBILE_NATIVE_PROPERTY}=${IOS_MOBILE_NATIVE}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${IOS_TABLET_NATIVE}" ]]; then
  echo "${IOS_TABLET_NATIVE_PROPERTY}=${IOS_TABLET_NATIVE}"
  awk -v pat="^${IOS_TABLET_NATIVE_PROPERTY}=" -v value="${IOS_TABLET_NATIVE_PROPERTY}=${IOS_TABLET_NATIVE}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${ANDROID_MOBILE_SPA}" ]]; then
  echo "${ANDROID_MOBILE_SPA_PROPERTY}=${ANDROID_MOBILE_SPA}"
  awk -v pat="^${ANDROID_MOBILE_SPA_PROPERTY}=" -v value="${ANDROID_MOBILE_SPA_PROPERTY}=${ANDROID_MOBILE_SPA}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${ANDROID_TABLET_SPA}" ]]; then
  echo "${ANDROID_TABLET_SPA_PROPERTY}=${ANDROID_TABLET_SPA}"
  awk -v pat="^${ANDROID_TABLET_SPA_PROPERTY}=" -v value="${ANDROID_TABLET_SPA_PROPERTY}=${ANDROID_TABLET_SPA}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${IOS_MOBILE_SPA}" ]]; then
  echo "${IOS_MOBILE_SPA_PROPERTY}=${IOS_MOBILE_SPA}"
  awk -v pat="^${IOS_MOBILE_SPA_PROPERTY}=" -v value="${IOS_MOBILE_SPA_PROPERTY}=${IOS_MOBILE_SPA}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${IOS_TABLET_SPA}" ]]; then
  echo "${IOS_TABLET_SPA_PROPERTY}=${IOS_TABLET_SPA}"
  awk -v pat="^${IOS_TABLET_SPA_PROPERTY}=" -v value="${IOS_TABLET_SPA_PROPERTY}=${IOS_TABLET_SPA}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${PROTECTED_MODE}" ]]; then
  echo "${ANDROID_PROTECTED_MODE_PROPERTY}=${PROTECTED_MODE}"
  echo "${IOS_PROTECTED_MODE_PROPERTY}=${PROTECTED_MODE}"
  awk -v pat="^${ANDROID_PROTECTED_MODE_PROPERTY}=" -v value="${ANDROID_PROTECTED_MODE_PROPERTY}=${PROTECTED_MODE}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  awk -v pat="^${IOS_PROTECTED_MODE_PROPERTY}=" -v value="${IOS_PROTECTED_MODE_PROPERTY}=${PROTECTED_MODE}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${ANDROID_KEY_ALIAS}" ]]; then
  echo "${BUILD_MODE_PROPERTY}=${BUILD_MODE}"
  awk -v pat="^${ANDROID_KEY_ALIAS_PROPERTY}=" -v value="${ANDROID_KEY_ALIAS_PROPERTY}=${ANDROID_KEY_ALIAS}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${ANDROID_KEY_PASSWORD}" ]]; then
  echo "${BUILD_MODE_PROPERTY}=${BUILD_MODE}"
  awk -v pat="^${ANDROID_KEY_PASSWORD_PROPERTY}=" -v value="${ANDROID_KEY_PASSWORD_PROPERTY}=${ANDROID_KEY_PASSWORD}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

if [[ ! -z "${ANDROID_KEYSTORE_PASSWORD}" ]]; then
  echo "${BUILD_MODE_PROPERTY}=${BUILD_MODE}"
  awk -v pat="^${ANDROID_KEYSTORE_PASSWORD_PROPERTY}=" -v value="${ANDROID_KEYSTORE_PASSWORD_PROPERTY}=${ANDROID_KEYSTORE_PASSWORD}" '{ if ($0 ~ pat) print value; else print $0; }' HeadlessBuild.properties > HeadlessBuild.properties.tmp
  mv HeadlessBuild.properties.tmp HeadlessBuild.properties
fi

echo "<----- All parameters was set up. ----->"

echo "<----- Build starting ..... ----->"

node build.js -clean

echo "<----- Starting signing process for android ----->"


