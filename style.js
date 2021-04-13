import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  card: {
    flex:0.80,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    borderRadius:4
  },
  cardImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
  },
  cardText: {
    fontSize: 18,
  },

});

export default styles;