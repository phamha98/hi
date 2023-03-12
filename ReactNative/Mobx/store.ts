import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react'
import { Log } from '@utils/LogColor'
import { action, observable } from 'mobx'
import { makeAutoObservable } from 'mobx'
class Ticker {
  @observable tick = 0

  constructor() {
    makeAutoObservable(this)
  }
  @action
  increment() {
    Log.e('increment')
    this.tick++ // 'this' will always be correct
    Log.e('increment2', this.tick)
  }
}

export const ticker1 = new Ticker()
export const store = {
  data: ticker1,
  func1: () => ticker1.increment()
}