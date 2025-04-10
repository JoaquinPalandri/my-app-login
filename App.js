import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';

const Stack = createStackNavigator();

export default function App() {
  const MyStack = () => (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register} />

    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar style="auto" />      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
