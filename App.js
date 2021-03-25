import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import OnBoarding from './screens/OnBoarding';

const AppStack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <AppStack.Navigator
        headerMode='none'
      >

        <AppStack.Screen name='Onboarding' component={OnBoarding}/>
        {/* <AppStack.screen /> */}
      </AppStack.Navigator>
   </NavigationContainer>
  );
}

