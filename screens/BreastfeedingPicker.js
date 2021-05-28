import React, {useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  Text,
  View ,
  Image,
  TextInput,
  Switch,
  Button} from 'react-native';
import {personalCSS} from '../components/style';
import {picker} from '../components/style';

const BreastfeedingPicker = ({value, getBreastfeedingInfo}) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const breastfeedingInfo = () => {
    getBreastfeedingInfo(value, 'preg-picker')
  }

  const onSelect = (value) => {
    console.log(value)
    setIsEnabled(value)
  }

  useEffect(()=> {
    if (value) {
      setIsEnabled(value)
    }
  }, [value]);

  console.log(isEnabled, 'pick')

  return (
    <View>
    <View style={personalCSS.parameters_view}>
    <View style={picker.imgContainer}>
      <Image source={require('../assets/images/onboarding-img3.png')} style={picker.img}/>
    </View>
    <View style={personalCSS.parametersText_box}>
          <Text
            style={personalCSS.parameters_text}>
            Breastfeeding
          </Text>
        </View>
      <View style={picker.switchBox}>
        <Switch
          trackColor={{ false: "#f4f3f4", true: '#2596be' }}
          thumbColor={isEnabled ? "white" : "white"}
          ios_backgroundColor="#f4f3f4"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={picker.switch}
          onSelect={(value)=> setIsEnabled(isEnabled)}
          onChange={(value)=> getBreastfeedingInfo(!isEnabled)}
        />
      </View>
    </View>
  </View>
  )
}


export default BreastfeedingPicker;
