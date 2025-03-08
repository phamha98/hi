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