```xml
        <intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <!-- <data android:scheme="mychat" />
            <data android:scheme="https" android:host="www.example.com" />
            <data android:scheme="http" android:host="www.example.com" /> -->
            <data
              android:host="app"
              android:scheme="demo" />
        </intent-filter>

```


```js
const config = {
  screens: {
    Home: {
      path: "home/:id",
      parse: {
        id: (id) => `${id}`,
      },
    },
    Profile: {
      path: "profile/:id",
      parse: {
        id: (id) => `${id}`,
      },
    },
    Notifications: "notifications",
    Settings: "settings",
  },
};

const linking = {
  prefixes: ["demo://app"],
  config,
};

export default linking;

```

```js
export default function App () {
  return (
    <NavigationContainer linking={linking}>
      <MyStack />
    </NavigationContainer>
  )
}
```

```js
import React from "react";
import { View, Button, Linking } from "react-native";

export default function LinkingButtonScreen({ navigation }) {
  const profileUrl = "demo://app/profile/234";
  const notioficationsUrl = "demo://app/notifications";
  const homeUrl = "demo://app/home/123";
  const settingsUrl = "demo://app/settings";

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Deeplink to Profile"
        onPress={() => {
          Linking.openURL(profileUrl);
        }}
      />
      <Button
        title="Deeplink to Notiofications"
        onPress={() => {
          Linking.openURL(notioficationsUrl);
        }}
      />
      <Button
        title="Deeplink to Home"
        onPress={() => {
          Linking.openURL(homeUrl);
        }}
      />
      <Button
        title="Deeplink to Setting"
        onPress={() => {
          Linking.openURL(settingsUrl);
        }}
      />

      <Button
        title="Open public Url"
        onPress={() => {
          Linking.openURL("https://ankitkumar.dev");
        }}
      />
    </View>
  );
}


```