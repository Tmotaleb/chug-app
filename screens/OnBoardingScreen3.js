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
  ImageBackground,
  ScrollView,
  Pressable,
  TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {intakeCSS, personalCSS, picker, personalIntake} from '../components/style';

const OnBoardingScreen3 = ({navigation}) => {


  return (
    <SafeAreaView style={intakeCSS.container}>

    <View>
      <Text>Hello3</Text>
    </View>

      <View style={intakeCSS.bottomBar}>
        <TouchableOpacity style={{alignSelf: 'flex-end', padding: 20}} onPress={()=> navigation.navigate('PersonalInfo')}>
          <Text style={{color: 'black', fontSize: 18}}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  )
}
export default OnBoardingScreen3;