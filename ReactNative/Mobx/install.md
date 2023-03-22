package.json
```json
"mobx": "^6.8.0",
"mobx-react": "^7.6.0",
```
babel.config.js
```js
plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src'
        }
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    'react-native-reanimated/plugin'
  ]
```
```json
    "useDefineForClassFields": true, //new
    "experimentalDecorators": true, //new
```