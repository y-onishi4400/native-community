import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './src/reducers'
import RootStack from './src/router'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

export default App
