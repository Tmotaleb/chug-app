import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, Text, View , SafeAreaView, TouchableOpacity, Switch, Image, ScrollView, Modal, Pressable} from 'react-native';
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

const PersonalParameters = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={personalCSS.container}>

      <View style={{backgroundColor:'white'}}>
        <View style={personalCSS.box1}>
          <Image source={require('../assets/images/app-blue.png')} style={personalCSS.image1}/>
        </View>
      </View>

       <View style={personalCSS.box2}>
        <Image source={require('../assets/images/app-blue.png')} style={personalCSS.image2}/>
        <ScrollView style={personalCSS.box3}>

          <View style={personalCSS.innerBox3}>
            <GenderPicker/>
            <AgePicker/>
            <WeightPicker/>
            <ActivityPicker/>
            <PregnantPicker/>
            <BreastfeedingPicker/>
            <AppleHealthPicker/>
          </View>
        </ScrollView>

        <View style={personalCSS.bottomBar}>
          <TouchableOpacity style={{alignSelf: 'flex-end', padding: 20}} onPress={()=> navigation.navigate('HomePage')}>
            <Text style={{color: 'white', fontSize: 18}}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}


export default PersonalParameters;