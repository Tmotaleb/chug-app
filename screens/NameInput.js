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
  DismissKeyboard,
  Button} from 'react-native';
import {personalCSS} from '../components/style';

const NameInput = ({getName}) => {
  const [text, setText] = useState('');

  console.log(getName, 'name')

  const nameInfo = () => {
    getName(text, 'nameInput')
  }

  console.log(text)
  return (
    <View>
      <TouchableOpacity style={personalCSS.parameters_view}>
        <Text
          style={[personalCSS.parameters_text, {marginLeft: 20, paddingRight: 30}]}>
          Name
        </Text>
        <TextInput
          style={{ borderBottomWidth: 1, borderBottomColor:'#00CCFF', color:'#2596be', fontSize:20, flex: 1, marginRight: 20}}
          placeholder='Enter your first name...'
          onChangeText={text => {setText(text); nameInfo()}}
          defaultValue={text}
          autoCompleteType={'name'}
          // multiline={true}
          // numberOfLines={1}
        />

      </TouchableOpacity>
    </View>
  )
}


export default NameInput;
