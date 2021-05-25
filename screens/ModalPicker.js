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

const ModalPicker = ({value, visible, onRequestClose, onPressIn, onPress, label, onCheck}) => {

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
          // setModalVisible(!isModalVisible);
          onRequestClose
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* <Text style={styles.modalText}>{label=label}</Text> */}

            <View style={styles.header}>
               {/* close button */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPressIn={onPressIn}
                // onPressIn={() => setModalVisible(!isModalVisible)}
              >
                {/* <Text style={styles.textStyle}>Hide Modal</Text> */}
                <Icon
                  name='close'
                  size={30}
                  color='grey'
                />
              </Pressable>

              <Text style={styles.modalText}>{label=label}</Text>

              <Pressable
                onCheck={onCheck}
              >
                <Icon
                  name='done'
                  size={30}
                  color='grey'/>


              </Pressable>

            </View>










          </View>
        </View>
      </Modal>

      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        // onPress={() => setModalVisible(true)}
        onPress={onPress}
      >
      <Text style={styles.textStyle}>Show Modal</Text>

      </Pressable> */}

    </View>
    // <View>
    //   <Pressable onPressIn={onPressIn}>
    //     <View style={picker.inputBox} pointerEvents='none'>
    //       <TextInput
    //         style={picker.textInput}
    //         placeholderTextColor='#2596be'
    //         placeholder={pickerValue}
    //         onChangeText={onChangeText}
    //         caretHidden={true}
    //         editable={false}
    //         />
    //     </View>
    //   </Pressable>

      // <Modal isVisible={isVisible}>
      //   <View style={picker.container}>
      //     <View style={picker.pickerContainer}>
      //       <View style={picker.header}>
      //         <TouchableOpacity onPressIn={onPressIn}>
      //           <Icon
      //             name='close'
      //             size={30}
      //             color='grey'/>
      //         </TouchableOpacity>

      //         <Text
      //           style={picker.txt}>
      //           {label=label}
      //         </Text>

      //         <TouchableOpacity
      //           onPress={onPress}>
      //           <Icon
      //             name='done'
      //             size={30}
      //             color='grey'/>
      //         </TouchableOpacity>
      //       </View>

      //       <Picker
      //         selectedValue={selectedValue}
      //         onValueChange={onValueChange}
      //       >
      //         {itemContainer = itemContainer}
      //       </Picker>
      //     </View>
      //   </View>
      // </Modal>

  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    height: 400,
    width: 350,
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
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
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    borderBottomColor: 'grey',
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
    backgroundColor: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


export default ModalPicker;
