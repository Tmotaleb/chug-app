import {StyleSheet, Dimensions} from 'react-native';

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
    backgroundColor: '#364d8d'
  },
  box1: {
    overflow:'hidden',
    height: height * 0.51,
    borderBottomLeftRadius:70,
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
    flex: 1
  },
  bottomBar: {
    height: 90,
    backgroundColor: '#364d8d'
  },
  innerBox3: {
    flex:1,
    marginTop: 30
  },
  parameters_view: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
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
  }
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#04303d'
  }
})


export {splash, boardingCSS, personalCSS, picker};

