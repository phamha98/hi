import {
    Platform, Linking
} from 'react-native';
import { createStackNavigator, createAppContainer, NavigationActions } from "react-navigation";
import firebase from "react-native-firebase";
import {UN_AUTHORIZE} from '../../navigation/screenTypes';
import { navigate } from '../../navigation/navigationService';

var FcmService = {
    load: function () {
        this.checkPermission();
        this.createNotificationListeners();
    },
    clearAllNotify: function () {
        firebase.notifications().removeAllDeliveredNotifications();
        firebase.notifications().setBadge(0)
    },
    destroy: function () {
        this.notificationDisplayedListener && this.notificationDisplayedListener();
        this.notificationListener && this.notificationListener();
        this.notificationOpenedListener && this.notificationOpenedListener();
        this.notificationOpen && this.notificationOpen();
        this.messageListener && this.messageListener();
    },
    enabledNotify: false,
    firebase: firebase,
    navigationDeferred: null,
    navigator: null,

    notificationDisplayedListener: null,
    notificationListener: null,
    notificationOpenedListener: null,
    notificationOpen: null,
    messageListener: null,
    checkPermission: async function () {
        var enabled = this.enabledNotify = await firebase.messaging().hasPermission();
        // var runAppCount = await LocalStorage.getItem(Common.storeKeys.RUN_APP_COUNT, '');
        // runAppCount = eval(runAppCount || 0)

        // if (enabled) {
        //     this.getToken(); 
        // } else {
        //     if (runAppCount <= 0) {
        //         this.requestPermission();
        //     }
        //     else {
        //         ViewCus.Alert.Confirm(() => {
        //             Platform.OS == 'ios' ? Linking.openURL('app-settings://notification/<bundleIdentifier>') : null;
        //         }, null, 'Để nhận các thông tin mới nhất. Vui lòng bật thông báo trong cài đặt');
        //     }
        // }
        // LocalStorage.setItem(Common.storeKeys.RUN_APP_COUNT, (runAppCount + 1) + '');
    },
    getToken: async function () {
        var fcmToken = await firebase.messaging().getToken();
        // console.log("fcmToken")
        // console.log(fcmToken)
        // LocalStorage.setItem(Common.storeKeys.FCM_TOKEN, fcmToken)
    },
    requestPermission: async function () {
        try {
            await firebase.messaging().requestPermission().then(e => { });
        } catch (error) {
            // User has rejected permissions
            // console.log('permission rejected');
            // console.log(error);
            //ViewCus.Alert.Alert('Hãy bật thông báo trong cài đặt');
        }

        this.getToken();
    },
    showNotify1: function (title, body, data) {
        this.showNotify({
            title,
            body,
            data
        });
    },
    showNotify: (notification) => {
        const channelId = new firebase.notifications.Android.Channel("Default", "Default", firebase.notifications.Android.Importance.High);
        firebase.notifications().android.createChannel(channelId);

        let notification_to_be_displayed = new firebase.notifications.Notification({
            data: notification.data,
            sound: 'default',
            show_in_foreground: true,
            title: notification.title,
            body: notification.body,
        });

        if (Platform.OS == "android") {
            notification_to_be_displayed
                .android.setPriority(firebase.notifications.Android.Priority.High)
                .android.setChannelId("Default")
                .android.setVibrate(1000);
        }

        firebase.notifications().displayNotification(notification_to_be_displayed);
    },
    readNotify: (notification) => {
        firebase.notifications().getBadge().then(count => {
            count--
            count >= 0 && firebase.notifications().setBadge(count)
        })
    },
    clickNotify: function (notification) {
        var data = notification.data || {};
        data = {
            "TypeId": "1",
            "ObjectId": "20190628608329",
            "StatusId": "1",
            ...data
        }
        // this.navigationDeferred.promise.then(() => {
            setTimeout(() => {
                if (data.TypeId == 1) {
                    this.navigator && this.navigator.dispatch(
                        NavigationActions.navigate({
                            // routeName: "UN_AUTHORIZE", params: {
                            //     Id: data.ObjectId
                            // }
                        })
                    );
                }
            }, 1000);
        // })
    },
    createNotificationListeners: async function () {
        this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification) => {
            this.enabledNotify && firebase.notifications().getBadge().then(count => {
                count++
                firebase.notifications().setBadge(count)
            })
        });
        /*
        * Triggered when a particular notification has been received in foreground
        * */
        this.notificationListener = firebase.notifications().onNotification((notification) => {
            const { title, body } = notification;
            this.showNotify(notification);
        });

        /*
        * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
        * */
        this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
            const { title, body } = notificationOpen.notification;
            // this.showAlert(title, "onNotificationOpened " + body);
            this.readNotify(notificationOpen.notification);
            this.clickNotify(notificationOpen.notification);
        });

        /*
        * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
        * */
        const notificationOpen = await firebase.notifications().getInitialNotification();
        if (notificationOpen) {
            const { title, body } = notificationOpen.notification;
            // this.showAlert(title, "getInitialNotification " + body);
            this.readNotify(notificationOpen.notification);
            this.clickNotify(notificationOpen.notification)
        }
        /*
        * Triggered for data only payload in foreground
        * */
        this.messageListener = firebase.messaging().onMessage((message) => {
            console.log(JSON.stringify(message));
        });
    }
}

export default FcmService