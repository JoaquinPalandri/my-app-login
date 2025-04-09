import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../credenciales';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();


    const logueo = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor complete todos los campos.');
            return;
        }        

        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('  Inicio de sesión exitoso', 'Bienvenido a la app.');
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Credenciales incorrectas.');
        }
    };

    return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/img/img-login.png')}
                        style={styles.logo}
                    />
                </View>

                <View style={styles.tarjeta}>
                    <View style={styles.cajaTexto}>
                        <TextInput
                            placeholder='Email'
                            style={styles.input}
                            placeholderTextColor="#999"
                            onChangeText={(text)=>setEmail(text)}
                        />
                    </View>
                    <View style={styles.cajaTexto}>
                        <TextInput
                            placeholder='Contraseña'
                            style={styles.input}
                            placeholderTextColor="#999"
                            secureTextEntry={true}
                            onChangeText={(text)=>setPassword(text)}
                        />
                    </View>
                    <View style={styles.botonContainer}>
                        <TouchableOpacity style={styles.boton} onPress={logueo}>
                            <Text style={styles.botonTexto}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            width: 150,
            height: 150,
            borderRadius: 75,
            resizeMode: 'cover',
            borderWidth: 2,
            borderColor: '#000',
        },
        logoContainer: {
            marginBottom: 20,
        },
        tarjeta: {
            width: '90%',
            backgroundColor: 'white',
            marginTop: 20,
            borderRadius: 20,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        cajaTexto: {
            marginBottom: 15,
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 10,
            padding: 10,
            fontSize: 16,
        },
        botonContainer: {
            marginTop: 10,
        },
        boton: {
            backgroundColor: '#007AFF',
            paddingVertical: 12,
            borderRadius: 10,
            alignItems: 'center',
            width: '50%',
            alignSelf: 'center',

        },
        botonTexto: {
            color: '#fff',
            fontSize: 16,
            fontWeight: '600',
        },
    });
