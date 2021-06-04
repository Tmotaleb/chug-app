import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View ,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
  Button} from 'react-native';
import {personalCSS} from '../components/style';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import {picker} from '../components/style';
import ModalPicker from './ModalPicker';

const ActivityPicker = ({value, getActivity, visible, onRequestClose, onPressIn, onPress, label, onCheck, selectedValue, onValueChange, itemDetails}) => {

  console.log(getActivity)

  var items =['Just Sleep', '30 min/week', '1 hour/week', '2 hour/week', '3 hour/week', '4+ hour/week'];

  const [isModalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

  const activityInfo = () => {
    getActivity(pickerValue, 'child')
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSelect = (value) => {
    console.log(value)
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
    <TouchableOpacity onPress={toggleModal} key={items.key}>
    <View style={personalCSS.parameters_view} >
      <View style={picker.imgContainer}>
        <Image source={require('../assets/images/onboarding-img3.png')} style={picker.img}/>
      </View>
      <View style={personalCSS.parametersText_box}>
          <Text
            style={personalCSS.parameters_text}>
            Activity
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
          label={'Activity'}
          selectedValue={pickerValue}
          onValueChange={(value)=> setPickerValue(value)}
          itemDetails={itemMapper(items)}
          onPressIn={() => {
            onSelect(pickerValue);
            setModalVisible(!isModalVisible);
            activityInfo();
          }}
        />

    </View>
  </TouchableOpacity>
  )
}


export default ActivityPicker;
