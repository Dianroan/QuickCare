import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import EmergencyHomeScreen from "./src/screens/EmergencyHomeScreen";
import EducationHomeScreen from "./src/screens/EducationHomeScreen";
import SplashScreen from "./src/screens/SplashScreen";
import HospitalMapScreen from "./src/screens/HospitalMapScreen";
import FaintingScreen from "./src/screens/Emergencys/FaintingScreen";
import BleedingScreen from "./src/screens/Emergencys/BleedingScreen";
import SeizureScreen from "./src/screens/Emergencys/SeizureScreen";
import CardiacArrestScreen from "./src/screens/Emergencys/CardiacArrestScreen";
import BurnScreen from "./src/screens/Emergencys/BurnScreen";
import IntoxicationScreen from "./src/screens/Emergencys/IntoxicationScreen";
import SuffocationScreen from "./src/screens/Emergencys/SuffocationScreen";
import ElectrocutionScreen from "./src/screens/Emergencys/ElectrocutionScreen";
import HeartAttackScreen from "./src/screens/Emergencys/HeartAttackScreen";

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
        <Stack.Screen
          name="Bleeding"
          component={BleedingScreen}
          options={{ title: "Herida Sangrante" }}
        />
        <Stack.Screen
          name="Seizure"
          component={SeizureScreen}
          options={{ title: "Convulsión" }}
        />
        <Stack.Screen
          name="CardiacArrest"
          component={CardiacArrestScreen}
          options={{ title: "Paro Cardiaco" }}
        />
        <Stack.Screen
          name="Burn"
          component={BurnScreen}
          options={{ title: "Quemadura" }}
        />
        <Stack.Screen
          name="Poisoning"
          component={IntoxicationScreen}
          options={{ title: "Intoxicación" }}
        />
        <Stack.Screen
          name="Choking"
          component={SuffocationScreen}
          options={{ title: "Atragantamiento" }}
        />
        <Stack.Screen
          name="Electrocution"
          component={ElectrocutionScreen}
          options={{ title: "Electrocución" }}
        />
        <Stack.Screen
          name="HeartAttack"
          component={HeartAttackScreen}
          options={{ title: "Infarto" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
