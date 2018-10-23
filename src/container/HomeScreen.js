import React from 'react'
import { View, Text, Platform } from 'react-native'
import PropTypes from 'prop-types'

class HomeScreen extends React.Component {
  render() {
    console.log('hoge')
    console.log(this.props)
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Hello nu</Text>
        <Text style={styles.textColor}>{Platform.OS === 'android' ? 'android' : 'ios'}</Text>
        <Text onPress={() => this.props.navigation.navigate('PostDetail')}>jump to post</Text>
      </View>
    )
  }
}
const styles = {
  text: {
    fontSize: 50,
    color: '#f5f5f5'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#b5b5d5'
  },
  textColor: {
    color: Platform.select({
      ios: 'white',
      android: 'white'
    })
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func
  })
}

export default HomeScreen
