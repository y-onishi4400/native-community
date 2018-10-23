import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import HomeScreen from './container/HomeScreen'
import SearchScreen from './container/SearchScreen'
import ProfileScreen from './container/ProfileScreen'
import FavoriteScreen from './container/FavoriteScreen'
import Notification from './container/NotificationScreen'

const styles = {
  HomeIcon: {
    // backgroundColor: 'black',
    marginBottom: 100
  }
}

export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      showLabel: false,
      showIcon: true
    }
  },
  Search: SearchScreen,
  Profile: ProfileScreen,
  Favorite: FavoriteScreen,
  Notification: Notification
})
