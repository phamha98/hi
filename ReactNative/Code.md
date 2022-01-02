# 🚀 react-native-video
```
allproject
jenen()
```
## 🚀 useImperativeHandle
```js
useImperativeHandle(ref, () => ({
    getValue () {
      if (isEmpty(value)) return ''
      return value
    },
    focus () {
      setValue('')
    },
  }))
```
## 🚀 using-async-storage-in-react-native (default -android 6M)
https://github.com/ptmt/using-async-storage-in-react-native/blob/master/Readme.md#database-or-disk-is-full

add 
```
import com.facebook.react.modules.storage.ReactDatabaseSupplier;
```

```java
long size = 50L * 1024L * 1024L; // 50 MB

com.facebook.react.modules.storage.ReactDatabaseSupplier
  .getInstance(getApplicationContext())
  .setMaximumSize(size);
```

[huong dan]()

[https://codedaily.io/tutorials/Increase-Android-AsyncStorage-Size-in-React-Native]()
# 🚀 react-native-video

# 🚀 Lib



<h1 align="center">
  <a href="https://reactnative.dev/">
   https://reactnative.directory/popular
  </a>
</h1>

## https://github.com/kristerkari/react-native-svg-transformer

<a href="https://facebook.github.io/react-native/"><img src="https://github.com/kristerkari/react-native-svg-transformer/raw/master/images/react-native-logo.png" width="160"></a><img src="https://github.com/kristerkari/react-native-svg-transformer/raw/master/images/plus.svg" width="100"><img src="https://github.com/kristerkari/react-native-svg-transformer/raw/master/images/svg-logo.svg" width="160">

React Native SVG transformer allows you to import SVG files in your React Native project the same way that you would in a Web application when using a library like [SVGR](https://github.com/smooth-code/svgr/tree/master/packages/webpack#svgrwebpack) to transform your imported SVG images into React components.



https://github.com/lottie-react-native/lottie-react-native

https://github.com/luggit/react-native-config

https://github.com/wonday/react-native-pdf

https://github.com/react-native-webrtc/react-native-callkeep

react-native-code-push

https://github.com/esthor/react-native-swipeable-list

![animated screenshot of a swipeable flatlist email inbox mockup using react-native-swipeable-list](../images/react-native-swipeable-list-demo2.gif)

[react-native-navigation-bar-color][https://github.com/thebylito/react-native-navigation-bar-color]

<img src="https://raw.githubusercontent.com/thebylito/react-native-navigation-bar-color/master/screenshots/screenShot3.jpg" height="500">

```js
import { NativeModules } from 'react-native';
const { RNRestart } = NativeModules;
RNRestart.Restart()
```