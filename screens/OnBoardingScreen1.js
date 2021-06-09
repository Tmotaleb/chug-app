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

      <ImageBackground
        source={require("../assets/images/girl-drink2.jpeg")}
        style={styles.box1}
        // imageStyle={{resizeMode: 'contain'}}
      >
        <View style={styles.titleBox}>
          <Text style={styles.title}>HYDRATE</Text>
        </View>

        {/* <View style={styles.subtitleBox}>
          <Text style={styles.subtitle}>The quest for hydration is very simple.</Text>
          <Text style={styles.subtitle}>Give your body the balance it needs to maintain itself.</Text>
        </View> */}
      </ImageBackground>


      <View style={styles.box2}></View>

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
    // alignItems: 'center',
    // flexDirection: "column"
  },
  box1: {
    // flex:1,
    // height: 800,
    // // backgroundColor: 'pink',
    resizeMode: "cover",
    // justifyContent: "center",
    height: 800,
    width: '100%'
  },
 bottomBar: {
   height: 60
 },

  titleBox: {
  position: 'absolute',
  top: 0,  //80
  left: 15,
  right: 380,
  bottom: 195,
  // backgroundColor: 'pink',
  justifyContent: "center",

  alignItems: 'center'
  // // color: 'white',
  // // fontSize: 25
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Kailasa',
    // transform: [{ rotate: '-90deg'}]
  },
  subtitleBox : {
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  subtitle : {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Kailasa',
    textAlign: 'justify',
    marginHorizontal: 20
  },
})


export default OnBoardingScreen1;