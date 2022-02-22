import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {IconCoreC} from '@mylib'
const Tab = createBottomTabNavigator()
import screen_dashboard from '../screen_dashboard'
import screen_dashboard2 from '../screen_dashboard2'
import TabBar from './TabBar'
const COLOR = {
  icon_open: '#525151',
  icon_close: 'gray',
}
export default function BottomHome () {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBar={props => <TabBar {...props} styleProp={{}}/>}
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen
        name='Home'
        component={screen_dashboard}
        initialParams={{
          icon: 'home',
          iconClose: 'home-outline',
          typeIcon: '',
          name: 'Trang chủ',
        }}
      />

      <Tab.Screen
        name='Menu'
        component={screen_dashboard}
        initialParams={{icon: 'grid', name: 'Danh mục'}}
      />
      <Tab.Screen
        name='Sale'
        component={screen_dashboard}
        initialParams={{icon: 'flame', name: 'Sale'}}
      />
      <Tab.Screen
        name='Notification'
        component={screen_dashboard}
        initialParams={{icon: 'notifications', name: 'Thông báo'}}
      />
      <Tab.Screen
        name='Person'
        component={screen_dashboard}
        initialParams={{icon: 'person', name: 'Tôi'}}
      />
    </Tab.Navigator>
  )
}
