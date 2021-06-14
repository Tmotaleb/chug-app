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

const OnBoardingScreen3 = ({navigation}) => {

  const OBheight = Dimensions.get('window').height;
const OBwidth = Dimensions.get('window').width;

  return (
    <View style={onboardingScreenStyles.container}>
      <ImageBackground
        source={require("../assets/images/water-leaf.png")}
        style={onboardingScreenStyles.image}
      >
        <View style={{
          position: 'absolute',
          top: 0,  //80
          left: 0,
          right: OBwidth-70,
          bottom: OBheight-950, //140
          justifyContent: "center",
          alignItems: 'center',
          alignSelf: 'center',
          marginLeft: 30,
          textAlignVertical: "center",
          // backgroundColor: 'pink'
          }}
        >
          <Text style={onboardingScreenStyles.title}>REPLENISH</Text>
        </View>

        <View style={onboardingScreenStyles.subtitleBox}>
          <Text style={[onboardingScreenStyles.subtitle, {marginBottom: 3, fontSize: 25, textAlign: 'center'}]}>Drink to your health</Text>
          <Text style={[onboardingScreenStyles.subtitle, {fontSize:15, marginHorizontal: 60, textAlign: 'center'}]}>Supply your body to regulate proper fluid levels and homeostasis</Text>
        </View>

        <View style={onboardingScreenStyles.bottomBar}>
          <TouchableOpacity style={onboardingScreenStyles.nextButton} onPress={()=> navigation.navigate('PersonalInfo')}>
            <Text style={onboardingScreenStyles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  )
}

export default OnBoardingScreen3;