import React, {useState, useEffect} from 'react';
import {
  Text,
  View ,
  TouchableOpacity,
  Image,
  Pressable,
  Modal,
  Alert,
  StyleSheet,
  TextInput,
  Button} from 'react-native';
import {personalCSS, picker} from '../components/style';
import {Picker} from '@react-native-picker/picker';
// import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ModalPicker = ({value, visible, onRequestClose, onPressIn, onPress, label, onCheck, selectedValue, onValueChange, itemDetails}) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState('');

  // console.log(getWeight, 'weight')

  // const items =[];
  // for (var i = 40; i <= 500; i++) {
  //   items.push(i.toString() + ' lb')
  // }

  // const weightInfo = () => {
  //   getWeight(pickerValue, 'childWeight')
  // }

  // toggleModal = () => {
  //   setModalVisible(!isModalVisible);
  // };

  // onSelect = (value) => {
  //   console.log(value)
  //   setPickerValue(value)
  // };

  // const onChange = (value) => {
  //   setPickerValue(value)
  // };

  // useEffect(()=> {
  //   if (value) {
  //     setPickerValue(value)
  //   }
  // }, [value]);

  // itemMapper = (items) => {
  //   return items.map((item)=> (
  //     <Picker.Item value={item} key={item} label={item} color='#04303d'/>
  //   ))
  // }

  return (
    <View >
      <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
        onRequestClose={()=> {
          Alert.alert('Modal closed');
          onRequestClose
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Pressable
                onPressIn={onPressIn}
              >
                <Icon
                  name='close'
                  size={30}
                  color='grey'
                />
              </Pressable>

              <Text style={styles.modalText}>{label=label}</Text>

              <TouchableOpacity
                onPressIn={onPressIn}
              >
                <Icon
                  name='done'
                  size={30}
                  color='grey'
                />
              </TouchableOpacity>

            </View>

            <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            itemStyle={{color:'#194d82', fontWeight:'400', fontSize: '25'}}
            >
            {itemDetails=itemDetails}
            </Picker>

          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(52, 52, 52, 0.9)',
    // marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 350,
    width: 350,
    backgroundColor: "white",
    borderRadius: 20,
    // padding: 5,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    backgroundColor: 'transparent',
    backgroundColor: 'white',
    padding: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    color: 'white'
  },

  button: {
    borderRadius: 25,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "lightgrey",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
    fontWeight: 'bold',
    color: '#04303d'
  },
  pickerItems: {
    color:'pink'
  }
});


export default ModalPicker;
