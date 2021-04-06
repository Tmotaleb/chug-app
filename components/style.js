import {StyleSheet, Dimensions} from 'react-native';
import * as Font from 'expo-font';

const splash = StyleSheet.create({
  box: {
        flex: 1,
        backgroundColor: 'pink',
        width: '100%',
        height: '100%',
        position: 'relative'

      }
});

const boardingCSS = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink'
  }
})

const { width } = Dimensions.get("window");
const aspectRatio = 647 / 970;
const height = width * aspectRatio;

const personalCSS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  box1: {
    height: height * 0.41
  },
  innerBox1: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    height: height,
    width: width,
  },
  box3: {
    flex: 1
  },
  bottomBar: {
    height: 90,
    backgroundColor: 'white'
  },
  innerBox3: {
    flex:1,
    marginTop: 30,
    backgroundColor: '#F8F8F8',
  },
  parameters_view: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // marginHorizontal: 30,
    backgroundColor: 'white',
    borderRadius: 5,

    shadowOffset: {
        width: 5,
        height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 9,
    shadowColor: '#E0E0E0'
  },
  title: {
    fontSize: 30,
    color:'white',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 5,
    fontFamily: 'NotoSansBold',
  },
  parameters_text: {
    padding: 10,
    fontSize: 25,
    // fontWeight: '900',
    fontFamily: 'NotoSansMedium',
  },
  topShadow:{
    shadowOffset: {
        width: -1,
        height: -1
    },
    shadowOpacity: 1,
    shadowRadius: 9,
    shadowColor: '#FBFFFF'
    },
    bottomShadow:{
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 1,
        shadowRadius: 9,
        shadowColor: '#E0E0E0'
    },
})

const picker = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerContainer : {
    height: 350,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 30,
    color: 'white',
    padding: 5
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
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#04303d'
  },
  imgContainer: {
    marginLeft: 15
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 40,
    shadowOffset: {
      width: 1,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowColor: '#B7C4DD',
    marginLeft: 5
  },
  inputBox: {
    marginRight: 20,
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    width: 95,
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    fontFamily: 'NotoSansRegular',
    fontSize: 24,
  },
  switchBox: {
    marginRight: 25
  },
  switch: {
    marginLeft: 5,
    transform:[{ scaleX: 1.1  }, { scaleY: 1.1 }]
  },

  // inner: {
  //   backgroundColor: '#f4f8fb',

  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginBottom: 15,
  //   justifyContent: 'space-between',
  //   flexDirection: 'row',
  //   marginHorizontal: 30,
  //   borderRadius: 15,
  //   borderColor: '#f4f8fb',
  //   borderWidth: 1,
  //   height: 130
  // },
  // topShadow: {
  //   shadowOffset: {
  //     width: -6,
  //     height: -6
  //   },
  //   shadowOpacity: 1,
  //   shadowRadius: 6,
  //   shadowColor: '#FBFFFF'
  // },
  // bottomShadow: {
  //   shadowOffset: {
  //     width: 6,
  //     height: 6
  //   },
  //   shadowOpacity: 1,
  //   shadowRadius: 6,
  //   shadowColor: '#B7C4DD'
  // }

})


export {splash, boardingCSS, personalCSS, picker};

