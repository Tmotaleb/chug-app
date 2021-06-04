import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View ,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  Alert,
  DismissKeyboard,
  Button} from 'react-native';
import {personalCSS} from '../components/style';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import {picker} from '../components/style';
import ModalPicker from './ModalPicker';

const GenderPicker = ({value, getGender, visible, onRequestClose, onPressIn, onPress, label, onCheck, selectedValue, onValueChange, itemDetails}) => {

  console.log(getGender, 'show')

  const pickerItems = ['None','Female', 'Male'];
  const [isModalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

  const genderInfo = () => {
    getGender(pickerValue, 'child')
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSelect = (value) => {
    console.log(value)
    setPickerValue(value)
  };

  useEffect(()=> {
    if (value) {
      setPickerValue(value)
    }
  }, [value]);


  const renderImage = () => {
    if (pickerValue === 'Male') {
      return (
        <Image source={require('../assets/images/onboarding-img2.png')} style={picker.img}/>
      )
    } else {
      return (
        <Image source={require('../assets/images/onboarding-img1.png')} style={picker.img}/>
      )
    }
  }

  const itemMapper = (items) => {
    return items.map((item)=> (
      <Picker.Item value={item} key={item} label={item}/>
    ))
  }

  console.log(pickerValue);

  return (
    <TouchableOpacity onPressIn={toggleModal}>
      <View style={personalCSS.parameters_view} >
        <View style={picker.imgContainer}>
          {renderImage()}
        </View>
        <View style={personalCSS.parametersText_box}>
          <Text
            style={personalCSS.parameters_text}>
            Gender
          </Text>
        </View>

        <Pressable onPress={toggleModal}>
          <View style={picker.inputBox} pointerEvents='none'>
            <TextInput
              style={picker.textInput}
              placeholderTextColor='#2596be'
              placeholder={pickerValue}
              onChangeText={() => pickerValue}
              caretHidden={true}
              editable={false}
              />
          </View>
        </Pressable>

        <ModalPicker
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(!isModalVisible)}
          onPressIn={() => setModalVisible(!isModalVisible)}
          onPress={() => setModalVisible(true)}
          label={'Gender'}
          selectedValue={pickerValue}
          onValueChange={(value)=> setPickerValue(value)}
          itemDetails={itemMapper(pickerItems)}
          onPressIn={() => {
            onSelect(pickerValue);
            setModalVisible(!isModalVisible);
            genderInfo()
          }}
        />

      </View>
    </TouchableOpacity>
  )
}


export default GenderPicker;
