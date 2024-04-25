1. create folder : assest/fonts
2. create file : react-native.config.js
```js
module.exports = {
    project: {
        ios: {},
        android: {},
    },
    assets: ['./assets/fonts'],
};
```

3. create folder Fonts/*.ttf insert MyApp/MyApp/Fonts
4. create folder android/app/main/assest/fonts/
5. example
```js
const styles = StyleSheet.create({
  hello: {
    fontFamily: 'Pacifico-Regular',
    fontSize: 30
  }
})
```