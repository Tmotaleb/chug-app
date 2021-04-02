import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, Text, View , SafeAreaView, TouchableOpacity, Switch, Image, ScrollView, Modal, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {personalCSS} from '../components/style';
import GenderPicker from './GenderPicker';
import AgePicker from './AgePicker';

const PersonalParameters = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={personalCSS.container}>

      <View style={{backgroundColor:'white'}}>
        <View style={personalCSS.box1}>
          <Image source={require('../assets/images/app-blue.png')} style={personalCSS.image1}/>
          {/* <Text style={personalCSS.text} h1>Enter Your Personal Parameters</Text> */}
        </View>
      </View>

       <View style={personalCSS.box2}>
        <Image source={require('../assets/images/app-blue.png')} style={personalCSS.image2}/>
      <ScrollView style={personalCSS.box3}>

        <View style={personalCSS.innerBox3}>
            <GenderPicker/>
          {/* <View style={personalCSS.parameters_view}>
            <Text style={personalCSS.parameters_text}>Age</Text>
          </View> */}
            <AgePicker/>
          <View style={personalCSS.parameters_view}>
            <Text style={personalCSS.parameters_text}>Weight</Text>
          </View>
          <View style={personalCSS.parameters_view}>
            <Text style={personalCSS.parameters_text}>Activity</Text>
          </View>
          <View style={personalCSS.parameters_view}>
            <Text style={personalCSS.parameters_text}>Pregnant</Text>
            <Text style={personalCSS.toggle}>toggle</Text>
          </View>
          <View style={personalCSS.parameters_view}>
            <Text style={personalCSS.parameters_text}>Breastfeeding</Text>
          </View>
          <View style={personalCSS.parameters_view}>
            <Text style={personalCSS.parameters_text}>Apple Health</Text>
          </View>
        </View>



      </ScrollView>
      <View style={personalCSS.bottomBar}>
        <TouchableOpacity style={{alignSelf: 'flex-end', padding: 20}} onPress={()=> navigation.navigate('HomePage')}>
          <Text style={{color: 'white', fontSize: 18}}>Next</Text>
        </TouchableOpacity>
      </View>
      </View>





      {/* <View style={personalCSS.box1}>
        <View style={personalCSS.parameters_view}>
          <Text style={personalCSS.parameters_text}>Gender</Text>
        </View>
        <View style={personalCSS.parameters_view}>
          <Text style={personalCSS.parameters_text}>Age</Text>
        </View>
        <View style={personalCSS.parameters_view}>
          <Text style={personalCSS.parameters_text}>Weight</Text>
        </View>
        <View style={personalCSS.parameters_view}>
          <Text style={personalCSS.parameters_text}>Activity</Text>
        </View>
        <View style={personalCSS.parameters_view}>
          <Text style={personalCSS.parameters_text}>Pregnant</Text>
          <Text style={personalCSS.toggle}>toggle</Text>
        </View>
        <View style={personalCSS.parameters_view}>
          <Text style={personalCSS.parameters_text}>Breastfeeding</Text>
        </View>
        <View style={personalCSS.parameters_view}>
          <Text style={personalCSS.parameters_text}>Apple Health</Text>
        </View> */}
      {/* </View> */}

      {/* <View style={personalCSS.box2}>
        <Text>Nav bar</Text>
      </View> */}

    </View>
  );
}


export default PersonalParameters;