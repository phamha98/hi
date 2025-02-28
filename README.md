### index.android.bundle

```sh
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle

```

### Nvm

```sh
nvm alias default 18
nvm use 18
```

## XCRUN

```sh
xcrun simctl list devices
xcrun xctrace list devices
xcrun simctl erase  12F1624A-B635-438A-9F81-8B3A0DC81191
xcrun simctl erase all
xcrun simctl list

xcrun simctl install B7AF4418-507F-4DBF-9810-6E598D161649


```

### Install IPA

```sh
npm install -g ios-deploy

xcrun xctrace list devices
ios-deploy --justlaunch --id <device-udid> --bundle /path/to/YourApp.ipa

ios-deploy --debug --id <device-udid> --bundle /path/to/YourApp.ipa


```

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

```sh
npx react-native start --port 8082
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

#### https://developer.apple.com/contact/request/unlisted-app/

#### https://developer.apple.com/library/archive/navigation/

# Guilde README.md write

- https://stackoverflow.com/questions/23821235/how-to-link-to-a-specific-line-number-on-github

- https://www.markdownguide.org/basic-syntax/

- https://github.com/fefong/markdown_readme

## [JS defineProperty](https://github.com/phamha98/hi/blob/master/javascript.md?plain=1#L10)

```js
Object.defineProperty(obj, "key", {
  value: "value",
  writable: false,
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
  assets: ["./assets/fonts"],
};
```

## [Thanh điều hướng ](https://github.com/thebylito/react-native-navigation-bar-color)

## [Npm ](https://github.com/phamha98/hi/blob/master/npm.md?plain=1#L1)

## [Formik ](https://github.com/phamha98/hi/blob/master/root.md?plain=1#L1-L199)

## [Resize APK ](https://github.com/phamha98/hi/blob/master/root.md?plain=1#L200-L272)

## [New certificate ](https://github.com/phamha98/hi/blob/master/ios.md?plain=1#L1-L61)

## [Search1 ](https://phamha98.github.io/open/)

## [Search2 ](https://phamha98.github.io/page/)

## URL

```js
let url = "a=2&b=23";
console.debug(Object.fromEntries(new URLSearchParams(url)));
let params = { a: "2", b: "23" };
console.debug(new URLSearchParams(params).toString());
```

## [Appium]

```js
while (true) {
  await driver.execute("mobile: swipe", {
    direction: "up",
    startX: 800,
    startY: 1000,
    endX: 800,
    endY: 350,
    duration: 50,
  });
  await new Promise((res) => setTimeout(res, 500));
}
```

## [Debounce]

```js
export function debounce(func: Function, wait?: number, immediate?: boolean) {
  let timeout: ReturnType<typeof setTimeout> | null;
  function _debounce(...args: any[]) {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const later = function __debounce() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout!);
    // @ts-ignore
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  }
  _debounce.stop = () => clearTimeout(timeout!);
  return _debounce;
}
```

### 🚀 VSCODE

## color

```json
"workbench.colorCustomizations" : {
    "terminal.foreground" : "#fff",
    "terminal.background" : "#000",
    "terminal.selectionBackground": "#0d3503",
    "terminalCursor.background": "#ffffff",
    "terminalCursor.foreground": "#ffffff",
}
```

### Config

```json
{
  "workbench.colorCustomizations": {
    //terminal
    "terminal.foreground": "#fff",
    "terminal.background": "#000",
    "terminal.selectionBackground": "#0d3503",
    "terminalCursor.background": "#ffffff",
    "terminalCursor.foreground": "#ffffff",
    //editer
    "editor.selectionBackground": "#f3bf95", //Màu của lựa chọn trình chỉnh sửa.
    "editor.selectionForeground": "#629942", //Màu của văn bản đã chọn để có độ tương phản cao.
    "editor.wordHighlightBackground": "#b7f395", //Màu nền của biến dùng***
    //find
    "editor.findMatchBackground": "#a692db", //Màu của kết quả tìm kiếm hiện tại.
    "editor.findMatchHighlightBackground": "#c2c4c1", //Màu của kết quả tìm kiếm.

    "editorCursor.foreground": "#ff0000", //Màu của con trỏ soạn thảo.
    "editorCursor.background": "#09ff00", //Màu nền của con trỏ soạn thảo.
    "editor.background": "#f3f2f2f5", //mau nen
    "editor.lineHighlightBackground": "#cacac4", //mau dong con tro

    // "editor.lineHighlightBorder": "#64f802", //mau border con tro
    // "editorLineNumber.foreground": "#345a25", //Màu của số dòng trình chỉnh sửa hiện tai.
    // "editorLineNumber.activeForeground": "#ee1c00", //Màu của số dòng trình soạn thảo.
    //thanh
    // "activityBar.background": "#030303", //mau thanh goc trai
    // "sideBar.background": "#dfdede", //mau thanh goc canh trai
    // "sideBar.border": "#030303", //mau border trai  editor

    // "window.activeBorder": "#ff0000", //border khung chon van ban
    //chonfile
    "list.activeSelectionBackground": "#686868", //mau nen file dang chon
    "list.activeSelectionForeground": "#fff", //mau chu file dang chon
    // "list.activeSelectionIconForeground":"#3cbe14",//mau mui ten file dang chon
    // "list.focusOutline":"#ff0000",//mau border file dang chon
    //hover chuot
    "list.hoverBackground": "#686868", //mau bg file di chuot
    "list.hoverForeground": "#ffffff" //mau fg file di chuot
    // "editor.hoverHighlightBackground":"#9da1a1",//Đánh dấu bên dưới từ mà di chuột được hiển thị.

    // "editor.selectionHighlightBackground": "#c6c9ca",
    // "window.inactiveBorder": "#33ff00",
  }
}
```

### Comment

```json
"editor.tokenColorCustomizations": {
        "comments": "#058b01"
    },
```

## 🚀 [Tip](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

```json
{
  "workbench.colorCustomizations": {
    "terminal.foreground": "#fff",
    "terminal.background": "#000",
    "terminal.selectionBackground": "#0d3503",
    "terminalCursor.background": "#ffffff",
    "terminalCursor.foreground": "#ffffff"
  }
}
```

### Auto Reveal in Explorer View (Vscode)

```json
{
  "explorer.autoReveal": true,
  "explorer.autoRevealExclude": {
    "**/node_modules": false,
    "**/bower_components": false
  }
}
```

## UBUNTU

<h1 align="center">
  <a href="https://reactnative.dev/">
    Setting ubuntu
  </a>
  <img  width="70" height="70" src="https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/ubuntu/logo.png">
</h1>

<p align="center">
  <strong>Setting once, use anywhere:</strong><br>
</p>

## 🚀 Install git

<img  width="70" height="70" src="https://nukeviet.edu.vn/uploads/news/2014_04/git-la-gi-tai-sao-su-dung-git.jpg">

```
sudo apt install git-all
```

```
git --version
```

## 🚀 A install nodejs

<img  width="140" height="70" src="https://upload.wikimedia.org/wikipedia/vi/a/a7/Nodejs_logo_light.png">

```
sudo apt install nodejs
```

```
nodejs – version﻿
```

## 🚀 B install node -nvm ubuntu

<img  width="140" height="70" src="https://upload.wikimedia.org/wikipedia/vi/a/a7/Nodejs_logo_light.png">

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

remove

```
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* ~/.npm
sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/bin/node*
sudo rm -rf /usr/local/include/node*

sudo apt-get purge nodejs npm
sudo apt autoremove
```

https://askubuntu.com/questions/1152570/npm-cant-find-module-semver-error-in-ubuntu-19-04

## 🚀 install npm.\*\*

<img  width="90" height="70" src="https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg">

```
sudo apt install npm  -y
```

```
npm -v
```

## 🚀 install react-native.

<img  width="70" height="70" src="https://www.paceit.co.uk/wp-content/uploads/2021/07/react-native-development-company.png">

```
sudo npm i  install -g react-native-cli
```

## 🚀 install jdk

<img   width="70" height="70" src="https://www.pngall.com/wp-content/uploads/2016/05/Java-PNG-Clipart.png">

```
sudo apt-get update
sudo apt-get install openjdk-8-jdk
```

## 🚀 install android-studio

<img   width="70" height="70" src="https://2.bp.blogspot.com/-tzm1twY_ENM/XlCRuI0ZkRI/AAAAAAAAOso/BmNOUANXWxwc5vwslNw3WpjrDlgs9PuwQCLcBGAsYHQ/s1600/pasted%2Bimage%2B0.png">

```
sudo apt update
sudo apt install android-studio
```

## 🚀 install snap

<img  width="90" height="70" src="https://dashboard.snapcraft.io/site_media/appmedia/2018/07/io.snapcraft.Store.png">

```
sudo snap install android-studio --classic
sudo add-apt-repository ppa:maarten-fonville/android-studio
```

## 🚀 create emulator

#create
create virtual device/Pixel 3>next/System Image> x86 Images -->Googles APIs->download->finisd
#create icon->\*8

## 🚀 environment

```
sudo nano .bash_profile
```

```
sudo nano .bashrc
```

## add value

```
export ANDROID_HOME=/home/phamha/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

```
source ~/.bashrc
```

```
source ~/.bash_profile
```

## 🚀 create jdk JAVA_HOME

//->/etc/environment
//->/usr/lib/jvm

```
sudo nano /etc/environment
```

```
JAVA_HOME="/usr/lib/jvm/java-1.8.0-openjdk-amd64"
ANDROID_HOME="/home/phamha/Android/Sdk"
```

```
java -version
echo $JAVA_HOME
```

vscode error
create newfile

## local.properties

```
sdk.dir=/home/phamha/Android/Sdk
```

- runandroid err

```
sudo chmod 755 android/gradlew
```

## create icon laucher

```
emulator -list -avds
emulator @device_name
emulator @Pixel_3_API_30
```

## 🚀 Create file_name.desktop

```
[Desktop Entry]
Version=1.0
Type=Application
Name=Pixel_3_API_30
Exec=emulator @Pixel_3_API_30
Terminal=true
```

---

allow lauce
logout->login

---

## 📖 install vi-eg ibus

```
sudo add-apt-repository ppa:ubuntu-vn/ppa
sudo apt-get install ibus-unikey
ibus-setup
```

```
setting->region&&Language->add->vietnamese(Unikey)->ibus restart
logout->login
```

## 🚀install google chrome

<img   width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/640px-Google_Chrome_icon_%28September_2014%29.svg.png">

```
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
```

```
sudo apt install ./google-chrome-stable_current_amd64.deb
```

## 🚀 vscode

<img   width="60" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png">

```
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -
```

```
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"
```

```
sudo apt update
sudo apt install code
```

## 👏 VMware Workstation 16 Pro on Ubuntu

<img   width="60" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vmware_workstation_16_icon.svg/1200px-Vmware_workstation_16_icon.svg.png">

- Step 1. Download VMware Workstation Pro From Official Webpage.

```
https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html
```

- Step 2. Change the VMware Workstation bundle permission to Chmod +X

```
sudo chmod +x VMware-Workstation-Full-16.1.0-17198959.x86_64.bundle
```

- Kiểm tra xem gói có thực thi được hay không, nhập lệnh này

```
ls -la | grep VMware-Workstation-Full-16.1.0-17198959.x86_64.bundle
```

- Step 3. Check or Install GNU Compiler Collection and Build Essential

```
sudo apt update
```

- These were the basic prerequisites to install VMware workstation pro successfully.

```
sudo apt install gcc build-essential
```

- Step 4. Install VMware workstation pro

```
sudo ./VMware-Workstation-Full-16.1.0 17198959.x86_64.bundle
```

Key VMWare 16 full active

- ZF3R0-FHED2-M80TY-8QYGC-NPKYF
- YF390-0HF8P-M81RQ-2DXQE-M2UT6
- ZF71R-DMX85-08DQY-8YMNC-PPHV8

Key VMWare 15 full active

- UZ3J8-D8F5M-M84LZ-W6WZZ-WP8T6
- AZ5NK-4TGEJ-088PZ-96X5X-ZL2T4
- VV510-AWYE1-M85QZ-NMYZG-QA8W6

# pick

<img   width="50" height="50" src="https://dashboard.snapcraft.io/site_media/appmedia/2019/05/pick.png">

```
sudo snap install pick-colour-picker
```

# Stacer

<img   width="50" height="50" src="https://cdn.pling.com/cache/400x400/img/3/3/8/0/4f250c13c3ede70c37695c51ac07d559a0c8.png">

```
sudo apt install stacer
```

# Insomia

<img   width="50" height="50" src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/insomnia-icon.png">

```
sudo snap install insomnia
```

# Vscode

<img   width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/2056px-Visual_Studio_Code_1.18_icon.svg.png">

```
sudo apt update
sudo apt install code
```

# Chrome

<img   width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Google_Chrome_icon_%282011%29.png">

```
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

sudo apt install ./google-chrome-stable_current_amd64.deb
```

# Yarn

<img   width="100" height="50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_m3mR0gylOJ4oFH0_VSjVqHjmr2P8bv6izV_UgnetMlXy2OJ0yYaMuZmhYxREMDQdeOk&usqp=CAU">

```
sudo apt install curl
```

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
```

```
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

```
sudo apt update
```

```
sudo apt install yarn
```

# Teamviewer

<img   width="100" height="100" src="https://static.teamviewer.com/resources/2019/07/TeamViewer_Logo_512x512.png">

```
wget https://download.teamviewer.com/download/linux/teamviewer_amd64.deb
sudo apt install ./teamviewer_amd64.deb
```

```
wget https://download.teamviewer.com/download/linux/teamviewer-host_amd64.deb
sudo apt install ./teamviewer-host_amd64.deb
```

<img   width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Bleachbit_logo.svg/1200px-Bleachbit_logo.svg.png">

```
Ubuntu software-->find:
bleachbit
```

FLIPPER
sudo snap install flipper --edge

https://www.facebook.com/fbflipper/public/linux

# new

```bash
PS1='\[\033[01;33m\]\t:\[\033[01;34m\]\W\[\033[00m\]\$ '
```

## old

```bash
#PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
```

<h1 align="center">
  <a href="https://reactnative.dev/">
    Setting swap
  </a>
</h1>

check

```sh
$ swapon -s
$ free -m
```

## Tạo swap file

## Cần tạo 1 swap file thì cách dễ dàng và nhanh nhất là sử dụng command: fallocate

```sh
$ sudo fallocate -l 4G /swapfile
```

## Phân quyền cho nó, chỉ được phép đọc bởi root user

```sh
$ sudo chmod 600 /swapfile
```

## Tạo swap từ swap file

```sh
- $ sudo mkswap /swapfile
```

## Kích hoạt swap

```sh
- sudo swapon /swapfile
```

## Thiết lập swap khởi động cùng HDH

## Nếu khởi động lại HDH, bộ nhớ swap sẽ mất đi. Vì vậy, để kích hoạt swap vĩnh viễn kể cả khi reboot lại OS chúng ta thực hiện bước sau:

## Sửa file /etc/fstab, và thêm dòng sau:

```sh
/swapfile   swap    swap    sw  0   0
```

## Tùy chỉnh hệ thống sử dụng swap hiệu quả

## Sửa file /etc/sysctl.conf và thêm 2 dòng sau:

```sh
vm.swappiness = 10
vm.vfs_cache_pressure = 50
```

[huong-dan](https://vinasupport.com/huong-dan-them-bo-nho-swap-tren-ubuntu-centos-linux/)
