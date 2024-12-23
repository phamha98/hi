## URL
```js
let url = "a=2&b=23"
console.debug(Object.fromEntries(new URLSearchParams(url)))
let params = { a: '2', b: '23' }
console.debug(new URLSearchParams(params).toString())

```
## Appium
```js
while (true) {
	await driver.execute('mobile: swipe', {
	    direction: 'up',
	    startX: 800,
	    startY: 1000,
	    endX: 800,
	    endY: 350,
	    duration: 50
	});
	await new Promise(res => setTimeout(res, 500));
}

```

## xcrun
```sh
xcrun simctl list devices
xcrun xctrace list devices
xcrun simctl erase  12F1624A-B635-438A-9F81-8B3A0DC81191
xcrun simctl erase all
xcrun simctl list
```
## Debounce
## [Debounce](https://github.com/phamha98/hi/blob/master/typescript.md?plain=1#L1)

### 🔴 Auto Reveal in Explorer View (Vscode)

<img src="https://i.pinimg.com/474x/ca/7e/17/ca7e17a6e4bfcbad483aae32c538ef59.jpg" style="width: 150px; height: auto;">
 

```json
{
"explorer.autoReveal": true,
  "explorer.autoRevealExclude": {
    "**/node_modules": false,
    "**/bower_components": false
  },
}
```
https://github.com/microsoft/vscode/issues/168408#issuecomment-1342513210

## Function chaining
```js
const get = (a = 1) => {
  let sum = a;
  const inner = (b) => {
    sum += b;
    console.log('=>>>', sum);
    return inner;
  };
  return inner;
};
get(2)(4)(7)(8)(9)(3)
```
```js
*.js
get FlatList(): AnimatedFlatList {
    return require('./components/AnimatedFlatList').default;
  },
vscode setting =>"javascript.validate.enable": false, //validate ESLINT & Flow

npm install -g javascript-obfuscator

javascript-obfuscator src/ --output dist/

{
  "scripts": {
    "obfuscate": "javascript-obfuscator src/ --output dist/"
  }
}
```
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
```shell
nvm alias default 18
nvm use 18
```
<br>


```shell
npx react-native start --port 8082
```

 
<br>

```shell
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle

```
<br>

```shell
sudo xcode-select --switch /Applications/Xcode.app
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer

xcode-select --install
sudo xcodebuild -license
```
<br>

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
## API demo
```sh
##*.http
### Get User Profile Request
GET https://jsonplaceholder.typicode.com/todos 
Authorization: 

```

arch -x86_64 pod install
 

 <br><br><br><br><br><br>

### DOCS

https://developer.apple.com/library/archive/navigation/
https://developer.apple.com/contact/request/unlisted-app/
https://developer.apple.com/library/archive/navigation/

