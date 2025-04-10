import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Button, TextInput, Avatar, Card } from 'react-native-paper';
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
            Alert.alert('Inicio de sesión exitoso', 'Bienvenido a la app.');
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Credenciales incorrectas.');
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            <Card style={{  paddingTop: 20 }}>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <Avatar.Image size={120} source={require('../assets/img/img-login.png')} />
                </View>

                <Card.Content>
                    <TextInput
                        label="Email"
                        value={email}
                        onChangeText={setEmail}
                        mode="outlined"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={{ marginBottom: 16 }}
                    />
                    <TextInput
                        label="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        mode="outlined"
                        secureTextEntry
                        style={{ marginBottom: 16 }}
                    />
                    <Button mode="contained" onPress={logueo}>
                        Sign In
                    </Button>
                </Card.Content>
            </Card>
        </View>
    );
}
