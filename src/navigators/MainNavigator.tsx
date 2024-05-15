import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {GameModalScreen} from '@screens/GameModalScreen';
import {Route} from '@types/routes';

const Stack = createNativeStackNavigator();

export const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={Route.Root} component={TabNavigator} />
      <Stack.Screen name={Route.Game} component={GameModalScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
