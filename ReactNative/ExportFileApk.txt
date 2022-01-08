 cmd
 
 ```
 applicationVariants.all { variant ->
        variant.outputs.all { output ->
            def formattedDate = new Date().format('HHmmss_DDMMYY')
            outputFileName = "ApplicationName-${variant.name}-v${variant.versionName}-v${defaultConfig.versionCode}-time_${formattedDate}.apk"
        }
    }
 ```
 
 
 1, giam size  file apk

 A: build nặng do:
1 tổng số mã Js được nhập vào ứng dụng của bạn (bao gồm trong node_modules)
2 tổng mức sử dụng mã gốc trong ứng dụng của bạn.
3 Tổng nội dung (hình ảnh / video / phương tiện ...)
 biến thể của thiết bị mà ứng dụng của bạn hỗ trợ


 
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

    2, doi ten mac dinh


android {
    applicationVariants.all { variant ->
        variant.outputs.all { output ->
            def formattedDate = new Date().format('HHmmss_DDMMYY')
            outputFileName = "ApplicationName-${variant.name}-v${variant.versionName}-v${defaultConfig.versionCode}-time_${formattedDate}.apk"
        }
    }

3, thay doi applicationId "com.test123"
//
applicationId "com.phamha98.giaitri.duaxe"

android {
    ndkVersion rootProject.ext.ndkVersion

    compileSdkVersion rootProject.ext.compileSdkVersion

    defaultConfig {
        applicationId "com.test123"

==>open hoac giai nen appl ra xem cac folder nao năng
tại file: android/build.gradle
thêm các thanhf phan nao khac la
buildscript {
    ext {
        //buildToolsVersion = "30.0.2"
        //minSdkVersion = 21 ????????24x2
        //compileSdkVersion = 30
        //targetSdkVersion = 30
        //ndkVersion = "21.4.7075529"
    }

release {
      shrinkResources true
      minifyEnabled true
