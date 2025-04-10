import React from 'react';
import { View } from 'react-native';
import { Button, TextInput, Avatar, Card } from 'react-native-paper';

export default function Register() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Card style={{ paddingTop: 20 }}>
        <View style={{ alignItems: 'center', marginBottom: 20 }}>
          <Avatar.Image size={120} source={require('../assets/img/img-login.png')} />
        </View>

        <Card.Content>
          <TextInput
            label="Nombre"
            mode="outlined"
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="Contraseña"
            mode="outlined"
            secureTextEntry
            style={{ marginBottom: 16 }}
          />
          <TextInput
            label="Confirmar contraseña"
            mode="outlined"
            secureTextEntry
            style={{ marginBottom: 16 }}
          />
          <Button mode="contained" onPress={() => {}}>
            Registrarse
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}
