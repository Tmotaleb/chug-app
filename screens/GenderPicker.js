import React, {useState, useEffect} from 'react';
import {Text, View , TouchableOpacity, Image, Modal, Pressable, StyleSheet, Picker} from 'react-native';import {personalCSS} from '../components/style';


const GenderPicker = () => {

  // const items=['female', 'male', 'both', 'none']
  // const [pickerValue, setPickerValue] = useState('');
  // const [modalVisible, setModalVisible] = useState(true);

  // const onSelect = (value) => {
  //   console.log(value)
  //   setPickerValue(value)
  // }

  // const onChange = (value) => {
  //   // console.log(value, 'new')
  //   setPickerValue(value)
  // }

  // useEffect(()=> {
  //   if (value) {
  //     setPickerValue(value)
  //   }
  // }, [value]);


  return (
    <View style={personalCSS.parameters_view}>
      <Text style={personalCSS.parameters_text}>Gender</Text>
    </View>
  )
}

export default GenderPicker;