```shell
nvm alias default 18
```
<br>

```shell
adb reverse tcp:8081 tcp:8081
```
<br>

```shell
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle

```
<br>

```shell
sudo xcode-select --switch /Applications/Xcode.app
```
<br>

```sh
diff -u node_modules/module-name/example.js modified/example.js > my-patch.patch
patch -p0 < my-patch.patch

git stash list
git diff stash@{0} > my_stash.patch
git apply my_stash.patch


///Áp dụng Stash và Tạo Patch
git stash apply
git stash show -p > my_stash.patch
///

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
```js
import http from 'k6/http';

export default function () {
    // Chuỗi JSON chứa dữ liệu yêu cầu
    let data = {
        message: {
            
            rid: "12312312",
            
        }
    };

    // Header của yêu cầu
    let headers = {
        'Content-Type': 'application/json',
         
        'x-auth-token': '213123',
        'x-user-id': '213213213'
    };

    // Gửi yêu cầu POST với dữ liệu và header tương ứng
    let res = http.post('https://21321321321', JSON.stringify(data), { headers: headers });

    // Log kết quả của yêu cầu
    console.log('Response status:', res.status);
}


```

 <br><br><br><br><br><br>

# NEXT...

https://github.com/phamha98/hi/blob/master/Toturial.md
<br>
<br>
https://github.com/phamha98/hi/blob/master/ReactNative/Npm.md
<br>
<br>
https://github.com/phamha98/hi/blob/master/ReactNative/Npm.md


https://developer.apple.com/library/archive/navigation/

https://developer.apple.com/contact/request/unlisted-app/

https://developer.apple.com/library/archive/navigation/
///comment
