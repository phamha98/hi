import {
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
  Dimensions,
  Animated,
  Button,TouchableOpacity
} from 'react-native'
import React, {useEffect, useRef, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {isEmpty} from 'underscore'
import {store} from '@redux/store'
import {ACTION_AUTH} from '@redux/action'
import {ViewCore} from '@component'

export default function screen_splash () {
  useEffect(() => {
    AsyncStorage.getItem('@isSigned').then(e => {
      console.log('@isSigned ds', e)
      let _isSigned = '0'
      if (e && e === '1') _isSigned = '1'
      if (e && e === '2') _isSigned = '2'
      // store.dispatch({
      //   type: ACTION_AUTH.SET_IS_AUTH,
      //   payload: {isSigned: _isSigned},
      // })
    })
  }, [])
  const poi = useRef(new Animated.Value(0)).current
  const animate = () => {
    Animated.spring(poi, {
      toValue: width_load,
      useNativeDriver: true,
    }).start()
  }
  /****************************** */
  const [width, setWidth] = useState(new Animated.Value(100))
  const toggleWidth = () => {
    const endWidth = 100

    Animated.timing(width, {
      toValue: endWidth,
      duration: 200,
      easing: Easing.linear,
    }).start()
  }
  return (
    <ViewCore midle flex1 backgroundColor='#fff'>
      <StatusBar barStyle='light-content' backgroundColor='#fff' />
      <ActivityIndicator size={40} color='#ddd' />
      <Text style={{color: '#ddd'}}>Loading......</Text>
      <ViewCore style={styles.contain}>
        <Animated.View
          style={[
            styles.contain,
            {backgroundColor: 'gray', width: 10, height: 4},
            {transform: [{translateX: poi}]},
          ]}
        />
      </ViewCore>
      <Text />
      <Button title='sa' onPress={animate} />
      <TouchableOpacity
        style={{
          width: width.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', '100%'],
          }),
          backgroundColor: width.interpolate({
            inputRange: [40, 100],
            outputRange: ['rgba(30, 70, 30, 1.0)', 'rgba(220, 100, 50, 0.8)'],
          }),
        }}
        onPress={toggleWidth}>
      </TouchableOpacity>
    </ViewCore>
  )
}
const width_load = Dimensions.get('screen').width * 0.5
const styles = StyleSheet.create({
  contain: {
    width: width_load,
    height: 5,
    backgroundColor: '#ddd',
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: '#ddd',
  },
})
