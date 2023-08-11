
https://github.com/phamha98/hi/blob/master/ReactNative/Develop.md
 https://github.com/phamha98/hi/blob/master/ReactNative/Npm.md
 https://github.com/phamha98/hi/blob/master/ReactNative/Code.md
 https://github.com/phamha98/hi/blob/master/ReactNative/Code2.md


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
pm2 delete all
pm2 monit
pm2 save
pm2 logs <process_name_or_id>
pm2 logs
pm2 update
pm2 start app.js --watch
pm2 start app.js -i <number_of_instances>

https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/


```

```gradle
subprojects { subproject ->
    if(project['name'] == 'react-native-reanimated'){
        project.configurations { compile { } }
    }
}
```
