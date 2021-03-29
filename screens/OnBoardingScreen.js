import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {boardingCSS} from '../components/style';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {

  //To Customize a property (i.e Button) refer below
  const Done = ({...props}) => (
    <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
    >
      <Text
      style={{fontSize:16}}
      >Done</Text>
    </TouchableOpacity>
  )

  // const Dots = ({selected}) => {
  //   let backgroundColor;
  //   backgroundColor= selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.2)' ;

  //   return (
  //     <View
  //       style={{
  //         width: 7,
  //         height: 7,
  //         marginHorizontal: 10,
  //         backgroundColor
  //       }}

  //     />
  //   )
  // }

  const Next = ({...props}) => {
    return (
    <TouchableOpacity
      style={{marginHorizontal:20}}
      {...props}
    >
      <Text
      style={{
        fontSize:16
      }}
      >Next</Text>
  </TouchableOpacity>
    )
  }


  return (
    <Onboarding
     //customized button
    DoneButtonComponent={Done}
    // DotComponent={Dots}
    NextButtonComponent={Next}

    bottomBarHighlight = {false}
    //Does not allow users to view the onboarding screen
    onSkip={()=> navigation.replace('PersonalInfo')}
    //Directs users to the Home Screen
    onDone={()=> navigation.navigate('PersonalInfo')}
    pages={[
      {
        backgroundColor: 'pink',
        image: <Image source={require('../assets/images/onboarding-img1.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: 'lightblue',
        image: <Image source={require('../assets/images/onboarding-img2.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#b19cd9',
        image: <Image source={require('../assets/images/onboarding-img3.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

    ]}
  />
  );
}


export default OnBoardingScreen;