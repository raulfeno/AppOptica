import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const Audiologia = () => {
  return (
    <ScrollView>
      <View style={styles.layout}>

        <Image
          source={{
            uri: 'https://www.isepceu.es/wp-content/uploads/slide1031.jpg',
          }}
          style={styles.image}
        />
        <Text>Ofrecemos una gran variedad de audífonos para que puedas elegir el que más se ajuste a tus necesidades. Las gamas más tecnológicas con las que podrás estar conectado mediante tus audífonos a los productos de última generación y las gamas en las que lo único importante es oír bien. En cualquier caso, la adaptación está garantizada y supervisada por personal cualificado.
        </Text>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.asCN31-hA6PLapVJoCKUgwAAAA?pid=ImgDet&rs=1',
          }}
          style={styles.image2}
        />
        <Text>
          Nuestras revisiones son totalmente gratuitas y nuestros presupuestos sin compromiso.{'\n'}
          Desde 599 €  puedes adquirir un audífono digital con adaptación garantizada, que incluye:
          {'\n'}
          -Pilas gratis durante un año.
          {'\n'}
          -Financiación sin intereses.
          {'\n'}
          -Servicio postventa.
        </Text>
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
});
export default Audiologia;