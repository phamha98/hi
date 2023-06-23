
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Button,
  TouchableOpacity,
  Easing,
  Image,
} from 'react-native';
import { ButtonRipple } from '@mylib'
import React, { useRef, useEffect, useState } from 'react';
import { sleep } from '@utils/array';
import { Log } from '@utils/Log';

const values = [0.95, 1, 1.05,];
const www = 300
const hhh = 500
const _heightColum = 200
const _widthColum = 20
const wSquare = 50
const hSquare = 50
let __h = hhh / 2 - hSquare / 2;
const _timeUp = 300
const _timeDow = 6500
export default function App() {
  const _height = useRef(new Animated.Value(0)).current;
  const moveX = useRef(new Animated.Value(0)).current;
  const moveX2 = useRef(new Animated.Value(0)).current;
  const randY = useRef(new Animated.Value(1)).current;
  const randY2 = useRef(new Animated.Value(1)).current;
  const f1 = () => {
    // Animated.loop(
    Animated.sequence([
      Animated.timing(_height, {
        toValue: -80,
        useNativeDriver: false,
        duration: _timeUp,
        easing: Easing.bezier(0.34, 1.56, 0.64, 1)

      }),
      Animated.timing(_height, {
        toValue: hhh,
        useNativeDriver: false,
        duration: _timeDow,
        easing: Easing.bezier(0.33, 1, 0.68, 1)
      }),
    ])
      .start();
  };
  const [round, setRound] = useState(0)
  useEffect(() => {
    _start.current && f2()
  }, [round])
  const f2 = async () => {
    let m1 = (Math.random() * values.length)
    let m2 = (Math.random() * values.length)
    let m3 = Math.random() < 0.5 ? m1 + 0.3 : m1 - 0.3
    Animated.parallel([
      Animated.parallel([
        Animated.timing(randY, {
          toValue: m1,
          useNativeDriver: false,
          duration: 1000,
        }),
        Animated.timing(randY2, {
          toValue: m3,
          useNativeDriver: false,
          duration: 1000,
        }),
      ]),
      //
      Animated.parallel([
        Animated.timing(moveX, {
          toValue: -www * 1.5,
          useNativeDriver: false,
          duration: 5000,
        }),
        Animated.timing(moveX2, {
          toValue: -www * 1.5 - 2 * _widthColum,
          useNativeDriver: false,
          duration: 5000,
        }),
      ]),
      //

      //
    ]).start(() => {
      moveX.setValue(0)
      moveX2.setValue(0)
      setTimeout(() => {
        setRound(r => r + 1)
      }, 500);
    });

  };
  useEffect(() => {
    // f1();
    // f2();
    _height.addListener((e) => {
      // Log.e('addListener', e)
      __h = e.value;
    });
  }, []);
  function setBtn() {
    if (_start.current == false) return start()
    Animated.sequence([
      Animated.timing(_height, {
        toValue: __h - 80,
        useNativeDriver: false,
        duration: _timeUp,
        easing: Easing.bezier(0.34, 1.56, 0.64, 1)

      }),

      Animated.timing(_height, {
        toValue: hhh,
        useNativeDriver: false,
        duration: _timeDow,
        easing: Easing.bezier(0.33, 1, 0.68, 1)
      }),
    ]).start();

    // f1()
    console.log('asdsa', _height);
  }
  if (!__DEV__) return null

  // const [start,setStart]=useState(false)
  const _start = useRef(false)
  const start = () => {
    _start.current = true
    f1()
    f2()
  }
  return (
    <View style={styles.container}>
      <ButtonRipple onPress={setBtn} style={styles.c1} rippleOpacity={0.2} rippleColor={'pink'}>
        <Animated.View
          style={{
            width: wSquare,
            height: hSquare,
            // backgroundColor: 'red',
            marginTop: hhh / 2 - hSquare / 2,
            marginLeft: www / 2 - wSquare / 2,
            transform: [{ translateY: _height }],
            zIndex: 999,
          }}
        >
          <Image source={require('./bird.gif')} style={{ width: wSquare, height: hSquare, resizeMode: 'contain' }} />
        </Animated.View>
        <Animated.View
          style={{
            width: _widthColum,
            height: _heightColum,
            position: 'absolute',
            bottom: -_heightColum / 2,
            right: - _widthColum,
            backgroundColor: 'green',
            transform: [{ translateX: moveX }, { scaleY: randY }],
          }}
        />
        <Animated.View
          style={{
            width: _widthColum,
            height: _heightColum,
            position: 'absolute',
            bottom: -_heightColum / 2,
            right: -(www / 1.5 + _widthColum),
            backgroundColor: 'yellow',
            transform: [{ translateX: moveX2 }, { scaleY: randY2 }],
          }}
        />
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            position: 'absolute',
            right: 0,
            backgroundColor: 'blue',
          }}
          onPress={setBtn}
        />
      </ButtonRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: 'gray',
    alignItems: 'center'
  },
  c1: {
    height: hhh,
    width: www,
    backgroundColor: '#FFF',
    // overflow: 'hidden',
  },
});
