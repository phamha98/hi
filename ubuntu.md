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

##  Sửa file /etc/fstab, và thêm dòng sau:
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
