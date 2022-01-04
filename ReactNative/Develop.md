# 🚀 cmd

```cmd
sudo rm -rf /tmp/metro-*
sudo ./gradlew cleanBuildCache

react-native run-android --deviceId=emulator-5554
adb devices -l
adb -s emulator-5554 shell
adb -s emulator-5555 install helloWorld.apk
npx react-native start --port 8083
sudo chmod 755 android/gradlew
sudo chmod -R 0777 /tmp
adb reverse tcp:8081 tcp:8081
sudo ./gradlew --stop
sudo ./gradlew clean

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

source ~/.profile
nvm ls-remote
nvm install 16.13.0

npm i -g npm@latest
sudo npm cache clean -f

sudo rm -rf node_modules

npm install -g appcenter-cli
appcenter login

npx react-native run-android --variant=release
cd android && ./gradlew assembleRelease
sudo ln -s $(which node) /usr/local/bin/node

```

<h3 style="color:red">processRequest = (req, res, next) => {</h3>
<h3 style="color:red">sudo ln -s $(which node) /usr/local/bin/node</h3>

# 🚀 Emulator

## run :

[setting adb win]()
add System variables\Path

```
C:\Users\USERNAME\AppData\Local\Android\sdk\platform-tools.
```

[get Id]()

```
adb devices -l
```

```
adb -s emulator-5554 shell
adb -s emulator-5555 install helloWorld.apk
```

```
react-native run-android --deviceId=emulator-5556
```

```
react-native run-android --deviceId=emulator-5554
```

https://developer.android.com/studio/command-line/adb#directingcommands

```
npx react-native start --port 8083
```

- url: http://localhost:8081/debugger-ui
- zoom ==>crtl+ (up)
- open setting port emulator[ Ctrl+M]()

## AndroidWifi-No internet

- Open Network and Sharing Center and click on current Connection
- Click on Properties
- Double Click on Internet Protocol Version 4 (TCP/IPv4)
- Set the Preferred and Alternate DNS servers as (Screenshot below) :
- Use the following DNS server address

```
8.8.8.8
8.8.4.4
```

- ===>share config net

```
emulator -avd Pixel_5_API_30 -gpu host -dns-server 8.8.8.8
```

🚀 https://stackoverflow.com/questions/50670547/android-studio-android-emulator-wifi-connected-with-no-internet
https://i.stack.imgur.com/JBHPe.png

# 🚀 Gradle

```
sudo ./gradlew clean
```

[sudo: ./gradlew: command not found]()

```
sudo chmod +x ./gradlew
```

Error: spawn ./gradlew EACCES

```
sudo chmod 755 android/gradlew
```

```
rm -rf /tmp/metro-*
```

```
chmod -R 0777 /tmp
```

# 🚀adb

```
adb reverse tcp:8081 tcp:8081
```

```
adb devices
adb kill-server
adb start-server
```

[gradle.properties]()

```
# org.gradle.jvmargs=-Xmx4096m -XX:MaxPermSize=4096m -XX:+HeapDumpOnOutOfMemoryError
# thay the 001
org.gradle.jvmargs=-Xmx1536M
```

[https://stackoverflow.com/questions/23081263/adb-android-device-unauthorized]()

```
./gradlew --stop (in MacOS)
./gradlew cleanBuildCache (in MacOS)
```

```
sudo + find error ./gradlew signingReport
```

# 🚀 node-npm

```
npm i -g npm@latest
sudo npm cache clean -f
```

🚀 [https://phoenixnap.com/kb/update-node-js-version]()

- Clear cache

```
rm -rf /tmp/metro-*
chmod -R 0777 /tmp
adb reverse tcp:8081 tcp:8081
```

- https://stackoverflow.com/questions/42768354/react-native-could-no-connect-to-development-server-in-createreactcontext

## 🚀 install node -nvm ubuntu

```
sudo apt install wget
```

```
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

```
source ~/.profile
nvm ls-remote
nvm install 16.15.1
```
