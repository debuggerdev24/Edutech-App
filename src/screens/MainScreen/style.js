import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
containerView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  card: {
    width: width * 0.85,
    height: height * 0.85,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  details: {
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  videoContainer: {
    width: '100%',
    height: height * 0.3,
    marginTop: 20,
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  buttonIcon: {
    width: 80,
    height: 80,
  },
  videoView: {
    width: '100%',
    height: '70%',
    padding: 5,
    marginTop: 20,
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  crossImg: {width: 80, height: 80, tintColor: 'red'},
  rightImg: {width: 80, height: 80, tintColor: 'green'},
});

export default styles;