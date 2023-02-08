1. Create file *.certSigningRequest
-Open Keychain Access
-Tabbar 
-Certificate Assistant
-Request a Cerificate From a Cerificate Authority
    -User Email Address
    -Saved to disk


2. Create *.cer
-https://developer.apple.com/account/resources/certificates/list

-Certificates +

-Apple Push Notification service SSL (Sandbox & Production)
Establish connectivity between your notification server, the Apple Push Notification service sandbox, and production environments to deliver remote notifications to your app. When utilizing HTTP/2, the same certificate can be used to deliver app notifications, update ClockKit complication data, and alert background VoIP apps of incoming activity. A separate certificate is required for each app you distribute.

-App ID: 
Select... com.app

-Choose File
CertificateSigningRequest***.certSigningRequest

Download

aps*.cer

3. Create *.p12

open file aps*.cer by Keychain Access

-login
-My Cerificate
-select file *.com.appname
-Export "*.com.appname"
-Saveas name*.p12

    Enter a password which will be userd to protect the exported items:
    Password:
    Werify:
    OK



4. update APNs Certificates
-https://console.firebase.google.com/project/**com.appname
-Clound Messaging
-Apple app configuration
-APNs Certificates
-Upload
    Upload your Production APNs certificate
    Apple APNs certificate
    Certificate password ?
    Upload
    

