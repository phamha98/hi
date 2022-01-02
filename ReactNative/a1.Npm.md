# 🚀1 Navigation

```
npm install @react-navigation/native
```

```
npm install react-native-screens react-native-safe-area-context
```

- MainActivity.java.

```java
import android.os.Bundle;//add this
@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

# 🚀2 Drawer

```
npm install @react-navigation/drawer
```

```
npm install react-native-gesture-handler react-native-reanimated
```

- To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:

```js
import 'react-native-gesture-handler'
```

# 🚀3 react-native-reanimated

```
yarn add react-native-reanimated@next
```

- Add Reanimated's babel plugin to your babel.config.js:

```js
module.exports = {
      ...
      plugins: [
          ...
          'react-native-reanimated/plugin',
      ],
  };
```

- 1: Bật công cụ Hermes bằng cách chỉnh sửa android/app/build.gradle

```js
project.ext.react = [
  (enableHermes: true) // <- here | clean and rebuild if changing
]
```

- 2: Plug Reanimated in MainApplication.java

```java
import com.facebook.react.bridge.JSIModulePackage; // <- add
  import com.swmansion.reanimated.ReanimatedJSIModulePackage; // <- add
  ...
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
  ...

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }

      @Override
      protected JSIModulePackage getJSIModulePackage() {
        return new ReanimatedJSIModulePackage(); // <- add
      }
    };
  ...
```

# 4 install \*.gif (image)

```gradle
implementation 'com.facebook.fresco:fresco:2.0.0'
implementation 'com.facebook.fresco:animated-gif:2.0.0'
```

- npm install react-native-screens react-native-safe-area-context
- npm install @react-navigation/stack
- npm install react-native-gesture-handler
- npm install @react-native-masked-view/masked-view
- npm install @react-navigation/drawer
- npm install react-native-gesture-handler react-native-reanimated
- npm install @react-navigation/bottom-tabs
- @react-native-async-storage/async-storage
- moment
- @react-native-async-storage/async-storage
- react-redux
- underscore

[Attempt to invoke interface method 'boolean com.swamansion.reanimated.layoutReanimation.NativeMethodsHolder.isLayoutAnimationE]()

![animated screenshot of a swipeable flatlist email inbox mockup using react-native-swipeable-list](../image/Screenshot_1639537086.png)
