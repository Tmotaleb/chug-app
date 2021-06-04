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
  ScrollView,
  Pressable,
  TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {intakeCSS, personalCSS, picker, personalIntake} from '../components/style';

const OnBoardingScreen1 = ({navigation}) => {


  return (
    <View style={styles.container}>

      <View style={styles.box1}>
      </View>
        <View style={styles.box2}>

        </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={{alignSelf: 'flex-end', padding: 20}} onPress={()=> navigation.navigate('OnBoardingScreen2')}>
          <Text style={{color: 'black', fontSize: 18}}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  box1: {
    // flex:1,
    height: 800,
    backgroundColor: 'pink'
  },
 bottomBar: {
   height: 60
 }
})


export default OnBoardingScreen1;