// src/screens/FaintingScreen.js
import React from 'react';
import EmergencyStepScreen from '../../components/EmergencyStepScreen';

const steps = [
  "Verifica que el entorno sea seguro antes de acercarte a la persona.",
  "Comprueba si la persona respira normalmente.",
  "Si respira, afloja su ropa y eleva sus piernas.",
  "No le des comida ni agua mientras esté inconsciente.",
  "Si no despierta en 1 minuto, llama al 911 inmediatamente.",
];

const FaintingScreen = ({ navigation }) => {
  return (
    <EmergencyStepScreen
      title="Guía para desmayo"
      steps={steps}
      navigation={navigation}
      onFinish={() => navigation.navigate('EmergencyHome')}
    />
  );
};

export default FaintingScreen;
