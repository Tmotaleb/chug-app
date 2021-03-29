import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , SafeAreaView, TouchableOpacity} from 'react-native';
import {personalCSS} from '../components/style'


const PersonalParameters = () => {

  return (
    <SafeAreaView style={personalCSS.container}>

      <View style={personalCSS.heading}>
        <Text h1>Heading 1</Text>
      </View>

      <View style={personalCSS.box1}>
        <View style={personalCSS.gender}>
          <Text>Line1</Text>
        </View>
        <View style={personalCSS.age}>
          <Text>Line2</Text>
        </View>
        <View style={personalCSS.weight}>
          <Text>Line3</Text>
        </View>
        <View style={personalCSS.activity}>
          <Text>Line4</Text>
        </View>
      </View>

      <View style={personalCSS.box2}>
        <Text>Nav bar</Text>
      </View>

    </SafeAreaView>
  );
}


export default PersonalParameters;