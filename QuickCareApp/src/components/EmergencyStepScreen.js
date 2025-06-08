// src/components/EmergencyStepScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Platform, Image, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';

const EmergencyStepScreen = ({ title, steps, onFinish, navigation }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = steps[stepIndex];

  useEffect(() => {
    speak(currentStep.text);
  }, [stepIndex]);

  const speak = (text) => {
    Speech.stop();
    Speech.speak(text, {
      language: 'es-MX',
      rate: 0.95,
    });
  };

  const nextStep = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const prevStep = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const call911 = () => {
    Linking.openURL('tel:911');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <ScrollView contentContainerStyle={styles.card}>
        {currentStep.image && (
          <Image source={{ uri: currentStep.image }} style={styles.image} resizeMode="cover" />
        )}
        <Text style={styles.stepText}>{currentStep.text}</Text>

        <TouchableOpacity style={styles.repeatButton} onPress={() => speak(currentStep.text)}>
          <Ionicons name="volume-high-outline" size={28} color="#fff" />
          <Text style={styles.repeatText}>Repetir</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.callButton} onPress={call911}>
        <Ionicons name="call" size={24} color="#fff" />
        <Text style={styles.callButtonText}>Llamar al 911</Text>
      </TouchableOpacity>

      <View style={styles.controls}>
        {stepIndex > 0 && (
          <TouchableOpacity style={styles.backButton} onPress={prevStep}>
            <Ionicons name="arrow-back-circle" size={24} color="#fff" />
            <Text style={styles.buttonText}>Atrás</Text>
          </TouchableOpacity>
        )}
        {stepIndex < steps.length - 1 ? (
          <TouchableOpacity style={styles.nextButton} onPress={nextStep}>
            <Ionicons name="arrow-forward-circle" size={24} color="#fff" />
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={[styles.nextButton, { backgroundColor: '#27ae60' }]}
            onPress={onFinish}
          >
            <Ionicons name="checkmark-done-circle" size={24} color="#fff" />
            <Text style={styles.buttonText}>Finalizar guía</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'android' ? 30 : 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f39c12',
    borderRadius: 20,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  stepText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  repeatButton: {
    backgroundColor: '#d35400',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  repeatText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 16,
  },
  callButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 2,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginTop: 5,
  },
  backButton: {
    backgroundColor: '#7f8c8d',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default EmergencyStepScreen;
