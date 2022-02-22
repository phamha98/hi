import React, {useState, useContext} from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import {IconCoreC} from '@mylib'
const screenWidth = Dimensions.get('screen').width
//Custom style
const STYLE_CUSTOM = StyleSheet.create({
  BOX: {
    borderTopWidth: 0.5,
    borderColor: 'gray',
  },
})
//
const SIZE_ACTIVE = 21
const SIZE_INACTIVE = 20
//
const COLOR_ACTIVE = 'green'
const COLOR_INACTIVE = '#5E5D5D'

//
export default function TabBar (props) {
  console.log(props)
  const {state, descriptors, navigation} = props
  const {routes} = state
  const handlePress = nameScreen => {
    navigation.navigate(nameScreen)
  }
  const renderColor = (a, b) => (a === b ? COLOR_ACTIVE : COLOR_INACTIVE)
  const renderSize = (a, b) => (a === b ? SIZE_ACTIVE : SIZE_INACTIVE)

  return (
    <Container>
      <View style={[styles.wrapper, STYLE_CUSTOM.BOX]}>
        {routes.map((route, key) => (
          <View key={key}>
            <TouchableOpacity
              style={[
                styles.item,
                {
                  width: routes.length !== 0 ? screenWidth / routes.length : 50,
                  height: 50,
                },
              ]}
              onPress={() => handlePress(route.name)}>
              <IconCoreC
                name={route.params.icon}
                size={renderSize(state.index, key)}
                // name={renderIcon(route.name, route)}
                color={renderColor(state.index, key)}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: renderColor(state.index, key),
                }}>
                {route.params.name}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: screenWidth,
  },
  wrapper: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    overflow: 'hidden',
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
const Container = ({children}) => {
  return <View style={styles.container}>{children}</View>
}
