import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens/HomeScreen';
import {HistoryScreen} from '@screens/HistoryScreen';
import {LeaderBoardScreen} from '@screens/LeaderBoardScreen';
import {UserScreen} from '@screens/UserScreen';
import {Route} from '@types/routes';
import {Avatar} from '@components/Avatar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name={Route.Home} component={HomeScreen} />
    <Stack.Screen name={Route.History} component={HistoryScreen} />
    <Stack.Screen name={Route.LeaderBoard} component={LeaderBoardScreen} />
    <Stack.Screen
      name={Route.User}
      component={UserScreen}
      options={{tabBarIcon: () => <Avatar />}}
    />
  </Tab.Navigator>
);
