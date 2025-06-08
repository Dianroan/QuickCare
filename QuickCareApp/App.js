import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import EmergencyHomeScreen from "./src/screens/EmergencyHomeScreen";
import EducationHomeScreen from "./src/screens/EducationHomeScreen";
import SplashScreen from "./src/screens/SplashScreen";
import HospitalMapScreen from "./src/screens/HospitalMapScreen";
import FaintingScreen from "./src/screens/Emergencys/FaintingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmergencyHome"
          component={EmergencyHomeScreen}
          options={{ title: "Modo Emergencia" }}
        />
        <Stack.Screen
          name="EducationHome"
          component={EducationHomeScreen}
          options={{ title: "Modo Educativo" }}
        />
        <Stack.Screen
          name="HospitalMap"
          component={HospitalMapScreen}
          options={{ title: "Hospitales Cercanos" }}
        />
        <Stack.Screen
          name="Fainting"
          component={FaintingScreen}
          options={{ title: "Desmayo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
