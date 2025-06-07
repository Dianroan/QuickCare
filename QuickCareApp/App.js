import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import EmergencyHomeScreen from './src/screens/EmergencyHomeScreen';
import EducationHomeScreen from './src/screens/EducationHomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EmergencyHome" component={EmergencyHomeScreen} options={{ title: 'Modo Emergencia' }} />
        <Stack.Screen name="EducationHome" component={EducationHomeScreen} options={{ title: 'Modo Educativo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
