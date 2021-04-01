import {StyleSheet, Dimensions} from 'react-native';


const splash = StyleSheet.create({
  box: {
        flex: 1,
        backgroundColor: 'pink',
        width: '100%',
        height: '100%',
        position: 'relative'

      },
  // inner: {
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor:'darkblue',
  //   position: 'absolute',
  //   borderTopLeftRadius: 195,
  //   borderTopRightRadius: 195,
  // }
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
    // justifyContent: 'space-between',
    // flexDirection: 'column',
    backgroundColor: '#364d8d'

    // padding: 200
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'lightgrey'
  },
  box1: {
    overflow:'hidden',
    height: height * 0.51,
    borderBottomLeftRadius:70,
    // height: 180,
    // padding:10,
    // backgroundColor: '#f2bfda',
    // marginBottom: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginVertical: 15
    // overflow: 'hidden',
    // height: height * 0.61,
    // overflow: 'hidden',
  },
  image1: {
    height: height,
    width: width,
    borderBottomLeftRadius:70,
  },
  box2: {
    flex: 1,
    overflow: 'hidden',


  },
  image2: {
    ...StyleSheet.absoluteFillObject,
    width: width,
    height: height,
    top:  -height * 0.61
  },
  box3: {
    borderRadius: 70,
    borderTopLeftRadius:0,
    backgroundColor: 'white',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'column'
  },

  bottomBar: {
    height: 90,
    backgroundColor: '#364d8d'
  },

  // text: {
  //   fontSize: 25,
  //   fontWeight: 'bold'
  //   // fontFamily: 'Cochin'
  // },

  // box1: {
  //   flex: 2,


  //   // flexDirection: 'column'
  //   // display: 'inline-flex',
  //   // flexWrap: 'wrap'
  // },
  innerBox3: {
    flex:1,
    marginTop: 30
  },
  parameters_view: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    // marginVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 30,
    backgroundColor: 'pink',
    borderRadius: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  parameters_text: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold'
  },
  // toggle: {

  // }


  // gender: {
  //   // flex: 1,
  //   backgroundColor: 'yellow',
  //   height: 90,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginBottom: 25,
  // },
  // age: {
  //   // flex: 2,
  //   backgroundColor: '#adeddc',
  //   height: 90,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginBottom: 25,
  // },
  // weight: {
  //   // flex: 3,
  //   backgroundColor: '#add6ed',
  //   height: 90,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginBottom: 25,
  // },
  // activity: {
  //   // flex: 4,
  //   backgroundColor: '#f2d5bf',
  //   height: 90,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   marginBottom: 25,
  // }
  // box2: {
  //   // flex:3
  //   backgroundColor: 'grey',
  // }
})


export {splash, boardingCSS, personalCSS};

