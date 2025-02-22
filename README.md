## URL
```js
let url = "a=2&b=23"
console.debug(Object.fromEntries(new URLSearchParams(url)))
let params = { a: '2', b: '23' }
console.debug(new URLSearchParams(params).toString())

```
## [Appium](https://github.com/phamha98/hi/blob/master/typescript.md?plain=1#L79-L93)


## XCRUN
```sh
xcrun simctl list devices
xcrun xctrace list devices
xcrun simctl erase  12F1624A-B635-438A-9F81-8B3A0DC81191
xcrun simctl erase all
xcrun simctl list

xcrun simctl install B7AF4418-507F-4DBF-9810-6E598D161649  


```
### Install IPA to device
```sh
npm install -g ios-deploy

xcrun xctrace list devices
ios-deploy --justlaunch --id <device-udid> --bundle /path/to/YourApp.ipa

ios-deploy --debug --id <device-udid> --bundle /path/to/YourApp.ipa


```

## [Debounce](https://github.com/phamha98/hi/blob/master/typescript.md?plain=1#L1-L46)

 
### [Auto Reveal in Explorer View (Vscode)](https://github.com/phamha98/hi/blob/master/vscode.md?plain=1#L82-L91)

https://github.com/microsoft/vscode/issues/168408#issuecomment-1342513210


## [Function chaining](https://github.com/phamha98/hi/blob/master/typescript.md?plain=1#L48-L60)

## SHOTCUT
```sh
open xcode  ...=> xed .
open vscode  ...=> code .
??vscode->"Shell Command: Install 'code' command in PATH"



open  terminal mac  from terminal vscode
=>open -a Terminal .
=>open -a Simulator
=>xcrun simctl list
=>xcrun simctl boot <UDID>



sudo rm -rf ~/Library/Developer/Xcode/DerivedData/*
sudo rm -rf ~/Library/Caches/org.swift.swiftpm
env | grep ARCHS
```
### Nvm 
```sh
nvm alias default 18
nvm use 18
```
<br>


```sh
npx react-native start --port 8082
```

```sh
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle

```
 
## Xcode 
```sh
sudo xcode-select --switch /Applications/Xcode.app
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

xcode-select --install
sudo xcodebuild -license
```

## STASH GIT 
```sh
diff -u node_modules/module-name/example.js modified/example.js > my-patch.patch
patch -p0 < my-patch.patch

git stash list
git diff stash@{0} > my_stash.patch
git apply my_stash.patch

git stash apply
git stash show -p > my_stash.patch

```
<br>

## SQL VPS 
```shell


https://www.tensorflow.org/

yum install mariadb-server mariadb-libs mariadb
sudo systemctl start mariadb
brew services restart redis

mysql -u root -p
SELECT user,authentication_string,plugin,host FROM mysql.user;
SHOW DATABASES;
SELECT host FROM mysql.user WHERE User = 'root';
GRANT ALL ON *.* to root@'172.0.0.1' IDENTIFIED BY 'pass';
FLUSH PRIVILEGES;
ALTER USER 'root'@'172.0.0.1' IDENTIFIED BY 'pass';
SET PASSWORD FOR 'root'@'172.0.0.1' = PASSWORD('pass');

sudo netstat -tuln
sudo ss -tlnp

:wq!
yum info firewalld
sudo systemctl start firewalld
firewall-cmd --zone=public --add-port=3306/tcp
sudo firewall-cmd --list-ports

```
## ADB 
```shell
adb reverse tcp:8081 tcp:8081
adb -s emulator-5554 reverse tcp:8081 tcp:8081
adb -s emulator-5556 reverse tcp:8081 tcp:8081 

adb -s emulator-5554 install myapp.apk


adb devices
#reactotron
adb -s emulator-5554 reverse tcp:9090 tcp:9090

adb shell input keyevent 82
#code=82 open keyboard
adb -s emulator-5554 shell input keyevent 82


adb kill-server
adb start-server



./gradlew --stop #(in MacOS)
./gradlew cleanBuildCache #(in MacOS)
rm -rf /tmp/metro-*
chmod -R 0777 /tmp

```

 ## PM2 nodejs

```shell
pm2 list
pm2 start app.js
pm2 start app.js --name "my-app"
pm2 show <process_name_or_id>
pm2 stop <process_name_or_id>
pm2 restart <process_name_or_id>

pm2 stop all
pm2 restart all
pm2 delete <process_name_or_id>
pm2 save
pm2 logs <process_name_or_id>
pm2 logs
pm2 update


```
## Gradle note
```gradle
subprojects { subproject ->
    if(project['name'] == 'react-native-reanimated'){
        project.configurations { compile { } }
    }
}
```
## API Shell
```sh

curl -X POST  -H "content-type:application/json" -H "user-agent:RC Mobile; ios 17.2; v1.1.50 (2023080386)" https://abv -d '{ }' |    jq


for i in {1..100}; do
curl -X POST  -H "content-type:application/json" \
 -H "user-agent:RC Mobile; ios 17.2; v1.1.50 (2023080386)" \
-H "x-auth-token:asdsadasdsadasd" \
-H "x-user-id:asdasdsad" \
https://qqqq -d '{"message":{"_id":"sadsda","rid":"sadsadsad","msg":"Dssad","tshow":false}}' | jq
done
```
## API demo -jsonplaceholder
```sh
##*.http
### Get User Profile Request
GET https://jsonplaceholder.typicode.com/todos 
Authorization: 
```

arch -x86_64 pod install
 
<br><br>

### Developer
#### https://developer.apple.com/library/archive/navigation/
####  https://developer.apple.com/contact/request/unlisted-app/
####  https://developer.apple.com/library/archive/navigation/

# Guilde README.md write
- https://stackoverflow.com/questions/23821235/how-to-link-to-a-specific-line-number-on-github

- https://www.markdownguide.org/basic-syntax/

- https://github.com/fefong/markdown_readme

## [JS defineProperty](https://github.com/phamha98/hi/blob/master/javascript.md?plain=1#L10)
```js
Object.defineProperty(obj, 'key', {
  value: 'value',
  writable: false
});
```
## [Function this](https://github.com/phamha98/hi/blob/master/javascript.md?plain=1#L221-L259)


## [Smart git](https://github.com/phamha98/hi/blob/master/git.md?plain=1#L1-L5)
## [Git docs](https://github.com/phamha98/hi/blob/master/git.md?plain=1#L1)
#### rename branch 
```sh
git branch -m new-name #Current 
git branch -m old-name new-name
```
## [SSH git](https://github.com/phamha98/hi/blob/master/git.md?plain=1#L43)
```sh
cd ~/.ssh && ssh-keygen

#Generating public/private rsa key pair.
#Enter file in which to save the key (/Users/phamha/.ssh/id_rsa):company

ssh-add ~/.ssh/company
cat company.pub | pbcopy

```
## [Git admend ](https://github.com/phamha98/hi/blob/master/git.md?plain=1#L56)

## [JS props-type](https://github.com/phamha98/hi/blob/master/javascript.md?plain=1#L168-228)
## [Ubuntu setting](https://github.com/phamha98/hi/blob/master/ubuntu.md)
## [Ubuntu setting swap](https://github.com/phamha98/hi/blob/master/ubuntu.md?plain=1#L411-L453)
## [Codepush ](https://github.com/phamha98/hi/blob/master/reactnative.md?plain=1#L30-L154)
## [Animated](https://github.com/phamha98/hi/blob/master/reactnative.md?plain=1#L156-L228)
```ts
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
interface WalletCardProps {
    y: Animated.Value;
    index: number;
    type: Cards;
  }
  
```
## [Fonts ](https://github.com/phamha98/hi/blob/master/reactnative.md?plain=1#L1-L29)
```js
module.exports = {
    project: {
        ios: {},
        android: {},
    },
    assets: ['./assets/fonts'],
};
```
## [Thanh điều hướng ](https://github.com/thebylito/react-native-navigation-bar-color)
## [Npm ](https://github.com/phamha98/hi/blob/master/npm.md?plain=1#L1)
## [Formik ](https://github.com/phamha98/hi/blob/master/root.md?plain=1#L1-L199)
## [Resize APK ](https://github.com/phamha98/hi/blob/master/root.md?plain=1#L200-L272)
## [New certificate ](https://github.com/phamha98/hi/blob/master/ios.md?plain=1#L1-L61)
## [Search1 ](https://phamha98.github.io/open/)
## [Search2 ](https://phamha98.github.io/page/)






