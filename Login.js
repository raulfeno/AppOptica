import React, { useEffect } from 'react';
import { Image, Text, StyleSheet, View, TouchableOpacity, TextInput, Alert } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const uri = 'https://ak.picdn.net/shutterstock/videos/1060308725/thumb/1.jpg'

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

function LoginScreen() {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Account created!')
                const user = userCredential.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
                Alert.alert(error.message)
            })
    }

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Signed in!')
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('HomeS');
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <View style={styles.container}>
            <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
            <View>
                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>E-mail</Text>
                <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="raulboly@gmail.com" />
            </View>
            <View>
                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Password</Text>
                <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder="password" secureTextEntry={true} />
            </View>
            <TouchableOpacity onPress={handleSignIn} style={[styles.button, { backgroundColor: '#00CFEB90' }]}>
                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, { backgroundColor: '#6792F090' }]}>
                <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
}

const Stack = createNativeStackNavigator();

export default function Login() {
    return (
            <Stack.Navigator initialRouteName="LoginS">
                <Stack.Screen name="LoginS" component={LoginScreen} />
                <Stack.Screen name="HomeS" component={HomeScreen} />
            </Stack.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    input: {
        width: 250,
        height: 40,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ffffff90',
        marginBottom: 20
    },
    button: {
        width: 250,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        borderColor: '#fff',
        borderWidth: 1,
    }

});