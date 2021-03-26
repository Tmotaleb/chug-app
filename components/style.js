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


export {splash, boardingCSS};

