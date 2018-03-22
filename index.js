import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import App from './App';
import appStore from './src/store/appStore'

const store = appStore()

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('ElementsInventory', () => ReduxApp);