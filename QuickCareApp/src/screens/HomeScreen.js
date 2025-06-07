import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleCall = () => {
    Linking.openURL('tel:911');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Primeros Auxilios Interactivos</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EmergencyHome')}>
        <Text style={styles.buttonText}>Modo Emergencia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={() => navigation.navigate('EducationHome')}>
        <Text style={styles.buttonText}>Modo Educativo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.emergencyButton} onPress={handleCall}>
        <Text style={styles.emergencyButtonText}>Llamar al 911</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#ff3b30',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  buttonSecondary: {
    backgroundColor: '#007aff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  emergencyButton: {
    position: 'absolute',
    bottom: 40,
    left: 30,
    right: 30,
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 100,
    elevation: 5,
  },
  emergencyButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HomeScreen;
