import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {boardingCSS} from '../components/style';
import Onboarding from 'react-native-onboarding-swiper';


const OnBoardingScreen = ({navigation}) => {

  //To Customize a property (i.e Button) refer below
  const Done = ({...props}) => (
    <TouchableOpacity
      style={{padding:20}}
      {...props}
    >
      <Text
      style={{fontSize:18}}
      >Next</Text>
    </TouchableOpacity>
  )

  const Next = ({...props}) => {
    return (
    <TouchableOpacity
      style={{padding:20}}
      {...props}
    >
      <Text
      style={{
        fontSize:18
      }}
      >Next</Text>
  </TouchableOpacity>
    )
  }

  const onboardingTitle = () => {
    return (
      <View style={styles.titleBox}>
        <Text style={styles.title}>Hydrate</Text>
      </View>
    )
  }

  const onboardingSubtitle = () => {
    return (
      <View style={styles.subtitleBox}>
        <Text style={styles.subtitle}>The quest for hydration is very simple.</Text>
        <Text style={styles.subtitle}>Give your body the balance it needs to maintain itself.</Text>
      </View>
    )
  }

  const onboardingImage = () => {
    return (
      <View style={styles.imageBox}>
        <View style={styles.imageBox1}>

          <Image
            style={styles.image}
            source={require('../assets/images/girl-drink.jpeg')}
          />
        </View>
      </View>
    )
  }

  return (
    <Onboarding
     //customized button
    DoneButtonComponent={Done}
    // DotComponent='false'
    // showPagination={false}
    NextButtonComponent={Next}

    bottomBarHighlight = {false}
    //Does not allow users to view the onboarding screen
    onSkip={()=> navigation.replace('PersonalInfo')}
    //Directs users to the Home Screen
    onDone={()=> navigation.navigate('PersonalInfo')}
    pages={[
      {
        backgroundColor: '#1e5490',
        image: onboardingImage(),
        title: onboardingTitle(),
        subtitle: onboardingSubtitle(),
      },
      {
        backgroundColor: 'lightblue',
        image: <Image source={require('../assets/images/onboarding-img2.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
      {
        backgroundColor: '#b19cd9',
        image: <Image source={require('../assets/images/onboarding-img3.png')} />,
        title: 'Onboarding',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

    ]}
  />
  );
}


const styles = StyleSheet.create ({
  titleBox: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center'
    // // color: 'white',
    // // fontSize: 25
  },
  title: {
    color: 'white',
    fontSize: 60,
    fontFamily: 'Kailasa'
    // transform: [{ rotate: '-90deg'}]
  },
  subtitleBox : {
    position: 'absolute',
    top: 160,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  subtitle : {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Kailasa',
    textAlign: 'justify',
    marginHorizontal: 20
  },
  imageBox: {
    // width: '20%',
    height: '100%',
    // resizeMode: 'contain'

  },
  imageBox1 : {

    height: 200,

  },
  image: {

    // width: "100%",
    // height: "100%",
  },

})


export default OnBoardingScreen;