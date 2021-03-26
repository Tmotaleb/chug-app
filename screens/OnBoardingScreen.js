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
  //   backgroundColor= selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)' ;

  //   return (
  //     <View
  //       style={{
  //         width: 5,
  //         height: 5,
  //         marginHorizontal: 3,
  //         backgroundColor
  //       }}

  //     />
  //   )
  // }


  return (
    <Onboarding
     //customized button
    DoneButtonComponent={Done}
    // DotComponent={Dots}

    //Does not allow users to view the onboarding screen
    onSkip={()=> navigation.replace('HomePage')}
    //Directs users to the Home Screen
    onDone={()=> navigation.navigate('HomePage')}
    pages={[
      {
        backgroundColor: 'pink',
        image: <Image source={require('../assets/images/onboarding-img1.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: 'blue',
        image: <Image source={require('../assets/images/onboarding-img2.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={require('../assets/images/onboarding-img3.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

    ]}
  />
  );
}


export default OnBoardingScreen;