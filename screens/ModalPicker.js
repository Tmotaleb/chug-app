import React, {useState, useEffect} from 'react';
import {Text, View , TouchableOpacity, Image, Modal, Pressable, StyleSheet, Picker} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModalPicker = ({visible, title, value}) => {

  const items=['female', 'male', 'both', 'none']

  const [pickerValue, setPickerValue] = useState('');
  const [modalVisible, setModalVisible] = useState(true);


  const onSelect = (value) => {
    console.log(value)
    setPickerValue(value)
  }

  const onChange = (value) => {
    // console.log(value, 'new')
    setPickerValue(value)
  }

  useEffect(()=> {
    if (value) {
      setPickerValue(value)
    }
  }, [value]);

  console.log(pickerValue, 'pick')

  return (
    <Modal
      animated
      transparent
      visible={modalVisible}
      animationType='fade'
      onRequestClose={()=> {setModalVisible(!modalVisible)}}
    >
      <View style={styles.container}>
        <View style={styles.pickerContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={()=> setModalVisible(!modalVisible)}>
              <Icon name='close' size={30} color='grey'/>
            </TouchableOpacity>
            <Text>{title || 'Placeholder' }</Text>
            <Icon name='done' size={30} color='grey' onPress={() => onSelect(pickerValue)}/>
          </View>
          <Picker selectedValue={pickerValue} onValueChange={onChange} >
            {items.map((item) => (<Picker.Item key={item} value={item} label={item}/>
            ))}
          </Picker>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  pickerContainer : {
    height: 350,
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 5
  },

})


export default ModalPicker;