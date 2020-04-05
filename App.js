import React from 'react';
import {Provider} from 'react-redux'
import store from './src/store'
import MainNavigation from './src/navigation'
//import {Platform} from 'react-native';

const App = () => (
  <Provider store={store}>
    <MainNavigation />
  </Provider>
)

export default App