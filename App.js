import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {Text, View , LogBox} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomePage from './screens/HomePage';
import OnBoardingScreen1 from './screens/OnBoardingScreen1';
import OnBoardingScreen2 from './screens/OnBoardingScreen2';
import OnBoardingScreen3 from './screens/OnBoardingScreen3';
import PersonalParameters from './screens/PersonalParameters';
import PersonalIntake from './screens/PersonalIntake';

const AppStack = createStackNavigator();

export default function App() {

  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(()=> {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false)
      }
    })
  }, [])

  LogBox.ignoreAllLogs(true)

  // if (isFirstLaunch === null) {
  //   return null;
  // } else if (isFirstLaunch === true) {
  //   return (
  //     <NavigationContainer>
  //       <AppStack.Navigator
  //         headerMode='none'
  //       >
  //         <AppStack.Screen name='OnboardingScreen' component={OnBoardingScreen}/>
  //         <AppStack.Screen name='HomePage' component={HomePage}/>
  //       </AppStack.Navigator>
  //     </NavigationContainer>
  //   );
  // } else {
  //   return <HomePage />
  // }

  return (
    <NavigationContainer>
        <AppStack.Navigator
          headerMode='none'
        >
          <AppStack.Screen name='OnBoardingScreen1' component={OnBoardingScreen1}/>
          <AppStack.Screen name='OnBoardingScreen2' component={OnBoardingScreen2}/>
          <AppStack.Screen name='OnBoardingScreen3' component={OnBoardingScreen3}/>
          <AppStack.Screen name='PersonalInfo' component={PersonalParameters}/>
          <AppStack.Screen name='PersonalIntake' component={PersonalIntake}/>

          <AppStack.Screen name='HomePage' component={HomePage}/>
          {/* <AppStack.Screen name='ModalPicker' component={ModalPicker}/> */}
        </AppStack.Navigator>
      </NavigationContainer>
  )
}

