// inspiration https://br.pinterest.com/pin/180073685077188312/
import React  from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import styles from './style';
import data from './data';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style = 'light' />
       <Swiper
        cards={data}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Image
                style={styles.cardImage}
                source={{
                  uri: card.image,
                }}
              />
              <Text style={styles.cardText}>
                {card.name} - {card.price}
              </Text>
            </View>
          );
        }}
        backgroundColor={'#696969'}
        disableBottomSwipe
        disableTopSwipe
        infinite
        stackSize={8}
        overlayLabels = {{
          
          left: {
	
	  title: 'NOPE',
    style: {
      label: {
        backgroundColor: '#696969',
        borderColor: '#000',
        color: 'white',
        borderWidth: 1
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: -30
      }
    }
  },
  right: {
	title: 'BUY',
    style: {
      label: {
        backgroundColor: '#ff6347',
        borderColor: '#ff0000',
        color: 'white',
        borderWidth: 1
      },
      wrapper: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 30,
        marginLeft: 30
      }
    }
  },
        }}
      />
    </View>
  );
}
