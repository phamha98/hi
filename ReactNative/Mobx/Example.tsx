import {Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {observer} from 'mobx-react'
import {Log} from '@utils/LogColor'
import {store} from './mobx'

const Mobx000 = observer(() => {
  return null
  return (
    <View>
      <Text>{store.data.tick}</Text>
      <Button title='Button' onPress={() => store.func1()} />
      <Button title='Button' onPress={() => store.func1()} />
      <Button title='Button' onPress={() => store.func1()} />
    </View>
  )
})

export default Mobx000
