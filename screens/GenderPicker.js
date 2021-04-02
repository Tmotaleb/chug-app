import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View ,
  TouchableOpacity,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  Button} from 'react-native';
import {personalCSS} from '../components/style';
import {Picker} from '@react-native-picker/picker';
import Modal from 'react-native-modal';
import { NeuInput, NeuView } from 'react-native-neu-element';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {picker} from '../components/style';

const GenderPicker = ({value}) => {

  const items = ['Female', 'Male'];
  const [isModalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

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

  return (
    <TouchableOpacity onPress={toggleModal}>
      <View style={personalCSS.parameters_view}>
        {renderImage()}
        <Text
          style={personalCSS.parameters_text}>
          Gender
        </Text>
        <View style={picker.inputBox}>
          <NeuInput
            placeholder={pickerValue}
            color='#eef2f9'
            height={40}
            width={70}
            borderRadius={16}
            />
        </View>

        <Modal isVisible={isModalVisible}>
          <View style={picker.container}>
            <View style={picker.pickerContainer}>
              <View style={picker.header}>
                <TouchableOpacity onPress={toggleModal}>
                  <Icon
                    name='close'
                    size={30}
                    color='grey'/>
                </TouchableOpacity>

                <Text
                  style={picker.txt}>
                  Gender
                </Text>

                <TouchableOpacity
                  onPress={()=> {
                    onSelect(pickerValue);
                    toggleModal();
                    }}>
                  <Icon
                    name='done'
                    size={30}
                    color='grey'/>
                </TouchableOpacity>
              </View>

              <Picker
                selectedValue={pickerValue}
                onValueChange={(value)=> setPickerValue(value)}
              >
                {items.map((item)=> (
                  <Picker.Item value={item} label={item} color='#04303d'/>
                ))}
              </Picker>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableOpacity>
  )
}


export default GenderPicker;
