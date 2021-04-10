import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, Text, View , SafeAreaView, TouchableOpacity, Switch, Image, ImageBackground, ScrollView, Modal, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {personalCSS} from '../components/style';
import GenderPicker from './GenderPicker';
import AgePicker from './AgePicker';
import ActivityPicker from './ActivityPicker';
import WeightPicker from './WeightPicker';
import PregnantPicker from './PregnantPicker';
import BreastfeedingPicker from './BreastfeedingPicker';
import AppleHealthPicker from './AppleHealthPicker';
import * as Font from 'expo-font'

const PersonalIntake = ({navigation, value}) => {

  return (
    <SafeAreaView style={personalCSS.container}>


    <View style={personalCSS.box1}>
     </View>

      <ScrollView style={personalCSS.intakeBox}>
      <View>
        <Text>Based on the information you have provided, it is recommended you drink {'HOLDER'} ounces of water per day
        </Text>
      </View>
        <View>
        <Text>If you wish to customize this information, please enter it below</Text>
        </View>
      </ScrollView>

      <View style={personalCSS.bottomBar}>
        <TouchableOpacity style={{alignSelf: 'flex-end', padding: 20}} onPress={()=> navigation.navigate('PersonalIntake')}>
          <Text style={{color: 'black', fontSize: 18}}>Next</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>
  );
}


export default PersonalIntake;