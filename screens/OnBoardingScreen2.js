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

const OnBoardingScreen2 = ({navigation}) => {


  return (
    <View style={onboardingScreenStyles.container}>
      <ImageBackground
        source={require("../assets/images/unsplash-plant.jpeg")}
        style={onboardingScreenStyles.image}
        transition={false}
      >
        <View style={onboardingScreenStyles.titleBox}>
          <Text style={onboardingScreenStyles.title}>RESTORE</Text>
        </View>

        <View style={onboardingScreenStyles.subtitleBox}>
          <Text style={[onboardingScreenStyles.subtitle, {marginBottom: 3, fontSize: 20, marginHorizontal: 20, textAlign:'center'}]}>Water is a natural appetite suppressant</Text>
          <Text style={[onboardingScreenStyles.subtitle, {fontSize:15, marginHorizontal: 45, textAlign: 'center'}]}>Promotes weight loss, flushes out bodily toxins and improves skin complexion</Text>
        </View>

        <View style={onboardingScreenStyles.bottomBar}>
          <TouchableOpacity style={onboardingScreenStyles.nextButton} onPress={()=> navigation.navigate('OnBoardingScreen3')}>
            <Text style={onboardingScreenStyles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  )
}

export default OnBoardingScreen2;