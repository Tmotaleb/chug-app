import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View ,
  TouchableOpacity,
  Image,
  TextInput} from 'react-native';
import {personalCSS} from '../components/style';
import { NeuInput, NeuView } from 'react-native-neu-element';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {picker} from '../components/style';

const WeightPicker = ({value}) => {

  const items =['Just Sleep', '30 min/week', '1 hour/week', '2 hour/week', '3 hour/week', '4+ hour/week'];

  const [isModalVisible, setModalVisible] = useState(false);

  const [pickerValue, setPickerValue] = useState('');

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSelect = (value) => {
    console.log(value)
    setPickerValue(value)
  }

  const onChange = (value) => {
    setPickerValue(value)
  }

  useEffect(()=> {
    if (value) {
      setPickerValue(value)
    }
  }, [value]);

  return (
    <View>
      <View style={personalCSS.parameters_view}>
      <Image source={require('../assets/images/onboarding-img3.png')} style={picker.img}/>
        <Text
          style={personalCSS.parameters_text}>
          Weight
        </Text>
        <TouchableOpacity style={picker.inputBox}>
          <NeuInput
            placeholder='Enter weight'
            color='#eef2f9'
            height={40}
            width={70}
            borderRadius={16}
            onChangeText={setPickerValue}
            value={pickerValue}  //user should only be able to input numbers
            maxLength={3}   //length should be only 3
            />
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default WeightPicker;
