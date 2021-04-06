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

const PersonalParameters = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  // const NeuMorph = ({children, size, style}) => {
  //   return (
  //     <View style={picker.topShadow}>
  //       <View style={picker.bottomShadow}>
  //         <View style={[
  //           picker.inner, style
  //         ]}>
  //           {children}
  //         </View>
  //       </View>
  //     </View>
  //   )
  // }

useEffect(() => {
  (async () => await Font.loadAsync({
    ComfortaaRegular: require('../assets/fonts/Comfortaa-Regular.ttf'),
    ComfortaaBold: require('../assets/fonts/Comfortaa-Bold.ttf'),
    ComfortaaSemiBold : require('../assets/fonts/Comfortaa-SemiBold.ttf'),
    ComfortaaMedium : require('../assets/fonts/Comfortaa-Medium.ttf'),
    NotoSansRegular: require('../assets/fonts/NotoSansJP-Regular.otf'),
    NotoSansMedium: require('../assets/fonts/NotoSansJP-Medium.otf'),
    NotoSansBold: require('../assets/fonts/NotoSansJP-Bold.otf'),
    MontserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
  }))();
   }, [])

  return (
    <View style={personalCSS.container}>

        <View style={personalCSS.box1}>
          <ImageBackground source={require('../assets/images/Wave-img.png')} style={personalCSS.image1}>
            <View style={personalCSS.innerBox1}>
              <Text style={personalCSS.title}>Enter Personal Parameters</Text>
          </View>
          </ImageBackground>
        </View>

          <ScrollView style={personalCSS.innerBox3}>
            <GenderPicker/>
            <AgePicker/>
            <WeightPicker/>
            <ActivityPicker/>
            <PregnantPicker/>
            <BreastfeedingPicker/>
            <AppleHealthPicker/>
          </ScrollView>


        <View style={personalCSS.bottomBar}>
          <TouchableOpacity style={{alignSelf: 'flex-end', padding: 20}} onPress={()=> navigation.navigate('HomePage')}>
            <Text style={{color: 'black', fontSize: 18}}>Next</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}


export default PersonalParameters;