// src/screens/EmergencyHomeScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EmergencyHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué emergencia estás presenciando?</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Fainting')}>
        <Text style={styles.buttonText}>Desmayo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bleeding')}>
        <Text style={styles.buttonText}>Herida sangrante</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Seizure')}>
        <Text style={styles.buttonText}>Convulsión</Text>
      </TouchableOpacity>

      {/* Más tipos de emergencia */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff3b30',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EmergencyHomeScreen;
