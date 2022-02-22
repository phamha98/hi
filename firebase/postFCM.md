```json
{
    "to": "client-token",
    "notification": {
      "title": "Some title",
        "body": "Some body",
        "sound": "my_custom_sound.wav",
        "android_channel_id": "new_email_arrived_channel",
			 "link": "demo://app/profile/234"
    },
    "data": {
        "field1": "value1",
        "field2": "value2"
    },
    "content_available": true,
    "priority": "high"
}
```

```cmd
 https://fcm.googleapis.com/fcm/send
```

```cmd
Auth-Bearer
Token:AAAA3XrvJYc:APA91bFo15nljG2ra-LsZ2J4PYWUlfzAROs4ynp3kQAASNQgFOfuJNnUeT-Os5h5jLFxHnpf2OcD4hRmkq-mZ7-0AlKLF7L9fgHLiVniabz3OPQB00fee-_3Jusn7aHa-HjCe7Vsay_C
```