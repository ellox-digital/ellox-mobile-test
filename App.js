import React from 'react';
import { createAppContainer } from 'react-navigation'
import Routes from './src/config/Routes'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import promise from 'redux-promise'
import reducers from './src/config/reducers'

const AppContainer = createAppContainer(Routes)
const store = applyMiddleware(promise)(createStore)(reducers)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}