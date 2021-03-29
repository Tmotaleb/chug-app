import {StyleSheet} from 'react-native';

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

const personalCSS = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'lightgrey'
  },
  heading: {
    flex: 1,
    backgroundColor: '#f2bfda'
  },
  box1: {
    flex: 2,
  },
  gender: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  age: {
    flex: 2,
    backgroundColor: '#adeddc'
  },
  weight: {
    flex: 3,
    backgroundColor: '#add6ed'
  },
  activity: {
    flex: 4,
    backgroundColor: '#f2d5bf'
  },
  box2: {
    flex:3
  }
})


export {splash, boardingCSS, personalCSS};

