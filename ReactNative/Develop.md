# 🚀 cmd

```cmd
sudo rm -rf /tmp/metro-*
npm start --reset-cache

git add . && git commit -m "" && git push
ssh-keygen
sudo chmod -R /user/path

sudo ./gradlew cleanBuildCache
npm install --legacy-peer-deps
npm install --save-dev jetifier
npx jetify

How to downgrade Node version?
$ npm install -g n
$ n 6.10.3
$ node -v
v6.10.3
Update latest
sudo n latest

react-native run-android --deviceId=emulator-5554
emulator --list-avds
adb devices -l
adb -s emulator-5554 shell
adb -s emulator-5555 install helloWorld.apk
npx react-native start --port 8083
sudo chmod 755 android/gradlew
sudo chmod -R 0777 /tmp
adb reverse tcp:8081 tcp:8081
sudo ./gradlew --stop
sudo ./gradlew clean
sudo ln -s "$(which node)" /usr/local/bin/node
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

```gradle
    applicationVariants.all { variant ->
        variant.outputs.all { output ->
            def formattedDate = new Date().format('HHmmss_DDMMYY')
            outputFileName = "ApplicationName-${variant.name}-v${variant.versionName}-v${defaultConfig.versionCode}-time_${formattedDate}.apk"
        }
    }
```

- error: processRequest = (req, res, next) => {

```
sudo ln -s $(which node) /usr/local/bin/node
```

- remove node

```
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* ~/.npm
sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/bin/node*
sudo rm -rf /usr/local/include/node*

sudo apt-get purge nodejs npm
sudo apt autoremove
```

- node nvm

```
sudo apt install wget
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
source ~/.profile
nvm ls-remote
nvm install 16.15.1
```

- node apt

```
sudo apt install nodejs
sudo apt install npm  -y
sudo npm i  install -g react-native-cli

sudo apt-get update
sudo apt-get install openjdk-8-jdk

sudo apt update
sudo apt install android-studio

sudo snap install android-studio --classic
sudo add-apt-repository ppa:maarten-fonville/android-studio

export ANDROID_HOME=/home/phamha/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools



source ~/.bashrc
source ~/.bash_profile

aapt dump permissions app-debug.apk

//clone folder
git clone https://github.com/phamha98/hi.git/ ./image


//@@@DEVTOOLS
npm install -g react-devtools
react-devtools
///@@@
npm i babel-plugin-module-resolver &&
npm i babel-plugin-wildcard &&
@@@ open developer options ::::Settings/About emulated device->touch 7 -Build number////////System/Developer options



react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
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
