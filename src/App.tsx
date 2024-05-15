/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {MainNavigator} from './navigators/MainNavigator';
import {Provider} from 'react-redux';
import {store} from '@state/store';

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);
export default App;
