###Auto Reveal in Explorer View (Vscode)
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

### Function chaining
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
```shell
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

open  terminal mac  from terminal vscode
=>open -a Terminal .
=>open -a Simulator
=>xcrun simctl list
=>xcrun simctl boot <UDID>

open xcode  ...=> xed .
open vscode  ...=> code .
??vscode->"Shell Command: Install 'code' command in PATH"


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

```shell
adb reverse tcp:8081 tcp:8081
adb -s emulator-5554 reverse tcp:8081 tcp:8081
adb -s emulator-5556 reverse tcp:8081 tcp:8081 
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


```shell
xcrun simctl erase  12F1624A-B635-438A-9F81-8B3A0DC81191
xcrun simctl erase all
xcrun simctl list

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

```shell

adb -s emulator-5554 install myapp.apk
adb reverse tcp:8081 tcp:8081
adb devices
adb -s emulator-5554 reverse tcp:9090 tcp:9090
adb shell input keyevent 82
#code=82
adb -s emulator-5554 shell input keyevent 82
adb devices
adb kill-server
adb start-server



./gradlew --stop #(in MacOS)
./gradlew cleanBuildCache #(in MacOS)
rm -rf /tmp/metro-*
chmod -R 0777 /tmp

```

<br>
<br>
<br>

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

```gradle
subprojects { subproject ->
    if(project['name'] == 'react-native-reanimated'){
        project.configurations { compile { } }
    }
}
```

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

