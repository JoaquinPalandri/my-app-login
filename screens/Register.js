import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { Button, TextInput, Avatar, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../credenciales';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Por favor complete todos los campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Registro exitoso', 'Ya podés iniciar sesión.');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'No se pudo completar el registro.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Card style={{ paddingTop: 20 }}>
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
          <TextInput
            label="Confirmar contraseña"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            mode="outlined"
            secureTextEntry
            style={{ marginBottom: 16 }}
          />
          <Button mode="contained" onPress={handleRegister}>
            Registrarse
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}
