<h1 style="color:red;text-align:center;">CODE-PUSH  -Basic</h1>

- [Staging]():Triển khai đẩy mã dành cho các bản dựng gỡ lỗi (app-debug.apk) 
- [Production](): Các bản phát hành sản xuất (app-release.apk).


# [install]()

## +install: [react-native-code-push]()
- npm:

```bash
npm i --save react-native-code-push
```
- yarn:
```bash
yarn add react-native-code-push
```
## +add: [android/settings.gradle]()

```gradle
include ':react-native-code-push'
project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')
```

## +add: [android/app/build.gradle]()

```gradle
apply from: "../../node_modules/react-native/react.gradle"
/* add */apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"//add this
```

## +add: [MainApplication.java]()

```java
import com.microsoft.codepush.react.CodePush;
//...
public class MainApplication extends Application implements ReactApplication {//

  private final ReactNativeHost mReactNativeHost =//
      new ReactNativeHost(this) {//
        // add this
        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }    

```
## +add: [res/value/string.xml]()

```xml
<string name="CodePushDeploymentKey" moduleConfig="true" translatable="false">s41PZ0E**************************</string>
<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>

```

## +add: [main/assets/appcenter-config.json]()

```json
{
    "app_secret": "b9*********************"
}

```  

## +config (ex App.js): [App.js]()

```js
import CodePush from 'react-native-code-push'

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'App có phiên bản mới bạn có muốn cập nhật!',
  },
}
function App () {
//default
//   useEffect(() => {
//     CodePush.sync({
//       updateDialog: true,
//       installMode: CodePush.InstallMode.IMMEDIATE,
//     })
//   }, [])
  return <MyApp />
}
export default CodePush(CodePushOptions)(App)
```  



## [Appcenter]
[Appcenter]:https://appcenter.ms/

- create App
- get deployments Distribute/CodePush ->setting

[install]()
- yarn
```
yarn world add appcenter-cli
```
- npm
```
npm set up -g appcenter-cli
```
[Login]()
```
appcenter login
```

## deploy:
- [code-push]()
```
appcenter codepush release-react -a {username}/{appname} -d Production
```
```
appcenter codepush release-react -a {username}/{appname} -d Staging
```
- [Promote...]()
