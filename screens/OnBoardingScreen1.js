import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View ,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  Image,
  Picker,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView,
  Pressable,
  TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {onboardingScreenStyles} from '../components/style';

const OnBoardingScreen1 = ({navigation}) => {

  return (
    <View style={onboardingScreenStyles.container}>
      <ImageBackground
        source={require("../assets/images/girl-drink2.jpeg")}
        style={onboardingScreenStyles.image}
        transition={false}
      >
        <View style={onboardingScreenStyles.titleBox}>
          <Text style={onboardingScreenStyles.title}>HYDRATE</Text>
        </View>

        <View style={onboardingScreenStyles.subtitleBox}>
          <Text style={[onboardingScreenStyles.subtitle, {marginBottom: 3, fontSize: 20}]}>The quest for hydration is very simple</Text>
          <Text style={[onboardingScreenStyles.subtitle, {fontSize:15, marginHorizontal: 60, textAlign: 'center'}]}>Give your body the balance it needs to maintain itself</Text>
        </View>

        <View style={onboardingScreenStyles.bottomBar}>
          <TouchableOpacity style={onboardingScreenStyles.nextButton} onPress={()=> navigation.navigate('OnBoardingScreen2')}>
            <Text style={onboardingScreenStyles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  )
}

export default OnBoardingScreen1;