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
        style={styles.image}
        // imageStyle={{resizeMode: 'cover'}}
      >
        <View style={styles.titleBox}>
          <Text style={styles.title}>HYDRATE</Text>
        </View>

        <View style={styles.subtitleBox}>
          <Text style={[styles.subtitle, {marginBottom: 3, fontSize: 20}]}>The quest for hydration is very simple.</Text>
          <Text style={[styles.subtitle, {fontSize:15}]}>Give your body the balance it needs to maintain itself.</Text>
        </View>

        <View style={styles.bottomBar}>
          <TouchableOpacity style={styles.nextButton} onPress={()=> navigation.navigate('OnBoardingScreen2')}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>

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
  image: {
    justifyContent: "flex-end",
    height: '100%',
    width: '100%'
  },
 bottomBar: {
  height: 90,
  backgroundColor: 'rgba(0,0,0, 0.2)'
 },
 nextButton: {
  alignSelf: 'flex-end',
  padding: 20
 },
 nextText: {
  color: 'white',
  fontSize: 20,
  opacity: 1.0
 },

  titleBox: {
  position: 'absolute',
  top: 0,  //80
  left: 18,
  right: 350,
  bottom: 140,
  justifyContent: "center",

  alignItems: 'center'
  // // color: 'white',
  // // fontSize: 25
  },
  title: {
    color: 'white',
    fontSize: 54,
    fontWeight: 'bold',
    fontFamily: 'Kailasa',
    // transform: [{ rotate: '-90deg'}]
  },
  subtitleBox : {
    position: 'absolute',
    top: 0, //190
    left: 0,  //120
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:70
    // backgroundColor: 'black'
  },
  subtitle : {
    color: 'white',
    // fontWeight: '500',
    // fontSize: 20,
    fontFamily: 'HoeflerText',
    textAlign: 'justify',
    marginHorizontal: 35
  },
})


export default OnBoardingScreen1;