import React, {useState, useEffect} from 'react';
import {
  Text,
  View ,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  Button} from 'react-native';
import {personalCSS, picker} from '../components/style';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import ModalPicker from './ModalPicker';

const WeightPicker = ({value, getWeight, visible, onRequestClose, onPressIn, onPress, label, onCheck, selectedValue, onValueChange, itemDetails}) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

  console.log(getWeight, 'weight')

  const pickerItems =[];
  for (var i = 40; i <= 500; i++) {
    pickerItems.push(i.toString() + ' lb')
  }

  const weightInfo = () => {
    getWeight(pickerValue, 'childWeight')
  }

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

  const itemMapper = (items) => {
    return items.map((item)=> (
      <Picker.Item value={item} key={item} label={item}/>
    ))
  }

  return (
    <TouchableOpacity onPress={toggleModal}>
      <View style={personalCSS.parameters_view} >
        <View style={picker.imgContainer}>
          <Image source={require('../assets/images/onboarding-img3.png')} style={picker.img}/>
        </View>
        <View style={personalCSS.parametersText_box}>
          <Text
            style={personalCSS.parameters_text}>
            Weight
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
          label={'Weight'}
          selectedValue={pickerValue}
          onValueChange={(value)=> setPickerValue(value)}
          itemDetails={itemMapper(pickerItems)}
          onPressIn={() => {
            onSelect(pickerValue);
            setModalVisible(!isModalVisible);
            weightInfo()
          }}
        />

      </View>
    </TouchableOpacity>
  )
}


export default WeightPicker;
