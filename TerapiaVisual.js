import * as React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


const TerapiaVisual = () => {
  return (
    <ScrollView>
      <View style={styles.layout}>

        <Image
          source={{
            uri: 'https://www.benaluaoptica.com/wp-content/uploads/2018/03/terapia-visual.jpg',
          }}
          style={styles.image} />
        <Text>
          La terapia visual es un programa personalizado de ejercicios que, bajo la supervisión de un óptico optometrista, persigue compensar ciertos problemas o mejorar las habilidades visuales.{'\n'}
          A diferencia de las gafas y las lentes de contacto, que compensan los defectos refractivos, la terapia visual enseña al sistema visual a compensarse a sí mismo. Como si de un entrenamiento físico se tratase, el objetivo es optimizar todo el sistema, incluidos los ojos y las áreas del cerebro que controlan la visión y otras funciones relacionadas.
          {'\n'}
          La terapia visual puede resultar efectiva para muchos problemas comunes, como:
          {'\n'}
          -el ojo vago
          {'\n'}
          -el estrabismo
          {'\n'}
          -la visión doble
          {'\n'}
          -algunas dificultades en la lectura y escritura
          {'\n'}
          -en la concentración
          {'\n'}
          -en la fatiga visual
          {'\n'}
          -en los deportes
          {'\n'}
          -en el aprendizaje
          {'\n'}
          Suele ser necesaria en niños y adolescentes, que se les ha dicho en otras revisiones que sus ojos están sanos, que tienen buena visión y que no necesitan llevar gafas, pero continúan teniendo bajo rendimiento en clase, en el trabajo y dificultades en el procesamiento visual.
          {'\n'}
          Las personas que realizan terapia visual funcional y comportamental, notan que leen más rápido y comprenden mejor lo que leen, trabajan con más eficiencia y también mejoran en las actividades deportivas.
        </Text>
        <Image
          source={{
            uri: 'https://www.iogranada.com/wp-content/uploads/2018/12/iog-terapia-visual.jpg',
          }}
          style={styles.image2} />
      </View>
    </ScrollView>
  );
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
    height: 250,
  },
  image2: {
    width: '100%',
    height: 200,
  },
});
export default TerapiaVisual;
