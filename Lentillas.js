import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Terapia = () => {
  return (
    <ScrollView>
      <View style={styles.layout}>

        <Image
          source={require('./optica-conde-lumiares-lentes-progresivas-1200x621.jpg')}
          style={styles.image}
        />
        <Text> Los progresivos son cristales que permiten la visión a 3 distancias diferentes, lo que hace de estos cristales el producto perfecto para llevar todo el día puesto sin necesidad de cambio de gafas en función de que miremos a una distancia u otra.Puedes leer un libro  y conducir con los mismos cristales, cubren las distancias de cerca, intermedia y lejos.
          {'\n'}
          Existen diferentes calidades de progresivos, la diferencia principal son los campos visuales, cuanto mejor sea la gama del progresivo mayor será el campo visual.
        </Text>
        <Image
          source={{
            uri: 'https://www.gafas.es/hubfs/Blog%20Photos/ES%20Blog%20Photos/gif-gleitsichtbrillen-spain.gif',
          }}
          style={styles.image2}
        />
        <Text>
          Como gama más premium de los progresivos tenemos los progresivos personalizados. Este tipo de progresivos se adaptan al usuario, incluyendo una serie de mediciones realizadas a éste.
          {'\n'}
          Existen diferentes tipos de personalización:
          {'\n'}
          -Por parámetros de la gafa respecto a la cara del usuario.
          {'\n'}
          -Por manera de mirar del usuario, es decir, la relación entre movimiento de cabeza y ojos.
          {'\n'}
          Trabajamos con las marcas más prestigiosas de lentes oftálmicas:{'\n'}
          -Indo{'\n'}
          -Essilor{'\n'}
          -Prats{'\n'}
          -Zeiss{'\n'}
          -Kodak{'\n'}
        </Text>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThB3qUiVmy620WGKOfC0d26eLCA3bdMyH9NA&usqp=CAU',
          }}
          style={styles.image3}
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'aqua',
  },
  title: {
    margin: 4,
    marginTop: 1,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  image: {
    width: '100%',
    height: 100,
  },
  image2: {
    width: '100%',
    height: 200,
  },
  image3: {
    width: '100%',
    height: 200,
  },
  textStile: {
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
export default Terapia;