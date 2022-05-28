import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'

const Divisiones = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.layout}>
      <ImageBackground
        source={{
          uri: 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg',
        }}
        resizeMode="cover"
        style={styles.imageBack}>
        <Text style={styles.text}> APP OPTICA</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Terapia')} style={[styles.button, { backgroundColor: '#00CFEB90' }]}>
          <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>TERAPIA VISUAL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Progresivos')} style={[styles.button, { backgroundColor: '#6792F090' }]}>
          <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>PROGRESIVOS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Audiologia')} style={[styles.button, { backgroundColor: '#00CFEB90' }]}>
          <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>AUDIOLOGIA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Lentillas')} style={[styles.button, { backgroundColor: '#6792F090' }]}>
          <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>LENTILLAS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.button, { backgroundColor: '#00CFEB90' }]}>
          <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.datos} >
          <Text>Contacto</Text>
          
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  imageBack: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
    lineHeight: 90,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    width: 350,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft: 13,
  },
  datos: {
    width: 250,
    height: 40,
    borderRadius: 10,
  }
});
export default Divisiones;
