/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import {store} from '@state/store';
import {lightTheme} from './theme';
import {ThemeProvider} from 'styled-components/native';
import {RootContainer} from './RootContainer';

const App = () => (
  <ThemeProvider theme={lightTheme}>
    <Provider store={store}>
      <RootContainer />
    </Provider>
  </ThemeProvider>
);

export default App;
