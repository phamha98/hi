import {LayoutC} from '@libC'
import React, {useRef, useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Platform,
  TouchableNativeFeedback,
  Animated,
  Button,
  Easing,
  LayoutAnimation,
   
} from 'react-native'
import {} from 'react-native-reanimated'
export default function screen_transport () {
  const [show, setShow] = useState(false)
  const _width = useRef(0)
  const _height = useRef(0)
  const _scale = useRef(new Animated.Value(1)).current
  const _start = () => {
    Animated.timing(_scale, {
      duration: 1000,
      toValue: 4,
      delay: 100,
      easing: Easing.bezier(0.22, -1.34, 0.64, 2.11),
    }).start(_end)
  }
  const _end = () => {
    Animated.timing(_scale, {
      duration: 1000,
      toValue: 0.001,
      easing: Easing.ease,
    }).start()
  }
  const _start2 = () => {
    Animated.spring(_scale, {
      toValue: 4,
      bounciness: 20,
      speed: 55,
    }).start(_end)
  }
  return (
    <LayoutC title='Đang vận chuyển' left={false}>
      <View
        style={styles.box}
        // onStartShouldSetResponderCapture={e =>
        //   console.log('onStartShouldSetResponderCapture')
        // }
        //
        onStartShouldSetResponder={event => {
          console.log('onStartShouldSetResponder', event.nativeEvent)

          _width.current = event.nativeEvent.locationX
          _height.current = event.nativeEvent.locationY
          setShow(!show)
          _start()
        }}
        // onResponderEnd={e => console.log('onResponderEnd')}
        // onResponderGrant={e => console.log('onResponderGrant')}
        // onResponderReject={e => console.log('onResponderReject')}
        // onResponderMove={e => console.log('onResponderMove')}
        // onResponderRelease={e => console.log('onResponderRelease')}
        // onResponderStart={e => console.log('onResponderStart')}
        // onResponderTerminationRequest={e =>
        //   console.log('onResponderTerminationRequest')
        // }
        // onResponderTerminate={e => console.log('onResponderTerminate')}
        // onStartShouldSetResponderCapture={e =>
        //   console.log('onStartShouldSetResponderCapture')
        // }
        // //
        // onMoveShouldSetResponderCapture={e =>
        //   console.log('onMoveShouldSetResponderCapture')
        // }
        // onLayout={e => console.log('layout')}
      >
        <Animated.View
          style={{
            width: 50,
            height: 50,
            backgroundColor: 'blue',
            position: 'absolute',
            left: _width.current - 25,
            top: _height.current - 25,
            borderRadius: 100,
            // transform: [{scale: _scale}],
            marginTop: _scale.interpolate({
              inputRange: [0, 0.5, 0.8, 1],
              outputRange: [0, 10, 2, 15],
            }),
          }}
        />
      </View>
      <Button title='onPreess' onPress={_start} />
    </LayoutC>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 400,
    height: 400,
    backgroundColor: 'pink',
  },
  boxt: {
    width: 200,
    height: 50,
    backgroundColor: 'green',
    margin: 20,
  },
})
