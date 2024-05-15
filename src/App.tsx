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
import {lightTheme} from './theme';
import {ThemeProvider} from 'styled-components/native';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  </ThemeProvider>
);
export default App;
