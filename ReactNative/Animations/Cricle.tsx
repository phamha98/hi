import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  const l = Math.sin(180);
  console.log(l);
  const radius = 115 / 2;
  const fmTop = (p) => {
    let _return = 0;
    const rd = (p * Math.PI) / 180;
    let _cos = Math.cos(rd);
    if (_cos > 0) {
      _return = radius - _cos * radius;
    } else _return = radius + Math.abs(_cos * radius);
  };
  const fmLeft = (p) => {
    let _return = 0;
    const rd = (p * Math.PI) / 180;
    let _sin = Math.sin(rd);
    _return = radius + _sin * radius;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: radius * 2,
          height: radius * 2,
          backgroundColor: 'green',
          borderRadius: radius,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}> 
      </View>
      <View
          style={{
            width: 10,
            height: 10,
            // borderRadius: 10,
            backgroundColor: 'red',
            position: 'absolute',
            left:fmLeft(45) - 5,
            top: fmTop(45) - 5,
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'yellow',
  },
});
