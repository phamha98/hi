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

adb -s emulator-5554 install myapp.apk
adb reverse tcp:8081 tcp:8081
adb devices
adb -s emulator-5554 reverse tcp:9090 tcp:9090
adb shell input keyevent 82
#code=82
adb -s emulator-5554 shell input keyevent 82

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


 https://github.com/phamha98/hi/blob/master/ReactNative/Develop.md
 https://github.com/phamha98/hi/blob/master/ReactNative/Npm.md
 https://github.com/phamha98/hi/blob/master/ReactNative/Code.md
 https://github.com/phamha98/hi/blob/master/ReactNative/Code2.md

