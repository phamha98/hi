## Formik
```ts
/(84|0[3|5|7|8|9])+([0-9]{8})\b/g



import {LayoutC} from '@libC'
import React from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import {Formik, ErrorMessage} from 'fomik'
import * as yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const checkValidate = yup.object({
  email: yup
    .string()
    .email('Không đúng định dạng email')
    .required('Đây là trường bắt buộc')
    .min(4, 'Tối thiểu 4'),
  password: yup
    .string()
    .min(8, 'Minimun length of 8')
    .required('Required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .min(8, 'Minimun length of 8')
    .required('Required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    // .test('cannot-begin-with-number', 'Cannot beging with number', value => {
    //   return value.search(/^[0-9]/i) === -1
    // })
    .min(10, 'Tối thiểu 10 chữ số')
    .required(),
})
export default function screen_transport () {
  console.log('screen_transport')
  return (
    <LayoutC title='Đang vận chuyển' left={false}>
      <Formik
        validationSchema={checkValidate}
        // validate={validate}
        initialValues={{
          email: '',
          password: '',
          confirm_password: '',
          phone: '',
        }}
        onSubmit={(values, {resetForm}) => {
          resetForm()
          console.log(values)
        }}
        // handleChange={e => console.log(e)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          values,
          errors,
        }) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={[
                styles.input,
                {borderWidth: errors.email ? 2 : 0, borderColor: 'red'},
              ]}
              placeholder='Nhập email'
            />
            {errors.email && (
              <Text style={{color: 'red'}}>
                {'  '}
                {errors.email}
              </Text>
            )}
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={[
                styles.input,
                {borderWidth: errors.password ? 2 : 0, borderColor: 'red'},
              ]}
              placeholder='Nhập password'
            />

            <TextInput
              onChangeText={handleChange('confirm_password')}
              onBlur={handleBlur('confirm_password')}
              value={values.confirm_password}
              style={[
                styles.input,
                {
                  borderWidth: errors.confirm_password ? 2 : 0,
                  borderColor: 'red',
                },
              ]}
              placeholder='Nhập lai password'
            />
            <TextInput
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              style={[
                styles.input,
                {borderWidth: errors.phone ? 2 : 0, borderColor: 'red'},
              ]}
              placeholder='Nhập sdt'
            />
            {errors.phone && (
              <Text style={{color: 'red'}}>
                {'  '}
                {errors.phone}
              </Text>
            )}
            <Text>test</Text>
            <Button onPress={handleSubmit} title='Submit' />
            <Text />
            <Button onPress={() => handleReset('email')} title='clear email' />
          </View>
        )}
      </Formik>
    </LayoutC>
  )
}

const styles = StyleSheet.create({
  input: {
    marginHorizontal: 10,
    backgroundColor: 'pink',
    margin: 10,
  },
})
const validate = values => {
  const errors = {}
  // if (!values.username) {
  //   errors.username = 'Required'
  // } else if (values.username.length < 4) {
  //   errors.username = 'Minimun length of 4'
  // }
  if (!values.phone) {
    errors.phone = 'Required'
  } else if (values.phone.match(/\d/g).length === 11) {
    errors.phone = 'Minimun length of 11'
  }
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 8) {
    errors.password = 'Minimun length of 8'
  }
  if (!values.confirm_password) {
    errors.confirm_password = 'Required'
  } else if (values.confirm_password.length < 8) {
    errors.confirm_password = 'Minimun length of 8'
  } else if (
    !!values.password &&
    !!values.confirm_password &&
    values.password != values.confirm_password
  ) {
    errors.confirm_password = 'Not equal to Password'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}
const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Minimun length of 4')
    .required('Required'),
  phone: yup
    .string()
    .min(11, 'Minimun length of 11')
    .max(11, 'Minimun length of 11')
    .required('Required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Required'),
  password: yup
    .string()
    .min(8, 'Minimun length of 8')
    .required('Required'),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .min(8, 'Minimun length of 8')
    .required('Required'),
})

```
## Resize APK
 
 ```java
 org.gradle.jvmargs=-Xmx4608m
 ```
 
 ```java
 applicationVariants.all { variant ->
        variant.outputs.all { output ->
            def formattedDate = new Date().format('HHmmss_DDMMYY')
            outputFileName = "ApplicationName-${variant.name}-v${variant.versionName}-v${defaultConfig.versionCode}-time_${formattedDate}.apk"
        }
    }
 ```
 
 
 1, giam size  file apk

### Build nặng do:
- 1 tổng số mã Js được nhập vào ứng dụng của bạn (bao gồm trong node_modules)
- 2 tổng mức sử dụng mã gốc trong ứng dụng của bạn.
- 3 Tổng nội dung (hình ảnh / video / phương tiện ...)
 biến thể của thiết bị mà ứng dụng của bạn hỗ trợ


```java
* android/app/build.gradle
buildTypes {
       
}
    //add this : giam dung luong apk
    dexOptions {
        incremental true
        javaMaxHeapSize "12g"
    }


def enableSeparateBuildPerCPUArchitecture = true//old false
def enableProguardInReleaseBuilds = true//old false


 * android/gradle.properties
    org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
    org.gradle.daemon=true
```
### doi ten mac dinh
```java
android {
    applicationVariants.all { variant ->
        variant.outputs.all { output ->
            def formattedDate = new Date().format('HHmmss_DDMMYY')
            outputFileName = "ApplicationName-${variant.name}-v${variant.versionName}-v${defaultConfig.versionCode}-time_${formattedDate}.apk"
        }
    }
```
 
```java
android {
    ndkVersion rootProject.ext.ndkVersion

    compileSdkVersion rootProject.ext.compileSdkVersion

    defaultConfig {
        applicationId "com.test123"
```
### open hoac giai nen appl ra xem cac folder nao năng
android/build.gradle
```
release {
    shrinkResources true
    minifyEnabled true
}
```