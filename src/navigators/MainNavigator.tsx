import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigator} from './TabNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {GameModalScreen} from '@screens/GameModalScreen';
import {Route} from '@types/routes';
import {OnboardScreen} from '@screens/OnboardScreen';

const Stack = createNativeStackNavigator();

export const MainNavigator = ({onboarded}) => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={onboarded ? Route.Root : Route.Onboard}>
      <Stack.Screen
        name={Route.Root}
        component={TabNavigator}
        options={{title: ''}}
      />
      <Stack.Screen
        name={Route.Game}
        component={GameModalScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name={Route.Onboard}
        component={OnboardScreen}
        options={{title: ''}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
