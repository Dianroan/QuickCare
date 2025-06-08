// src/screens/EmergencyHomeScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
} from 'react-native';
import * as Speech from 'expo-speech';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const emergencies = [
  {
    name: 'Desmayo',
    screen: 'Fainting',
    icon: 'face-dizzy',
    color: '#f39c12',
  },
  {
    name: 'Herida sangrante',
    screen: 'Bleeding',
    icon: 'knife',
    color: '#c0392b',
  },
  {
    name: 'Convulsión',
    screen: 'Seizure',
    icon: 'brain',
    color: '#8e44ad',
  },
  {
    name: 'Paro cardiaco',
    screen: 'CardiacArrest',
    icon: 'heart-pulse',
    color: '#e74c3c',
  },
  {
    name: 'Quemadura',
    screen: 'Burn',
    icon: 'fire',
    color: '#d35400',
  },
  {
    name: 'Intoxicación',
    screen: 'Poisoning',
    icon: 'skull-crossbones',
    color: '#34495e',
  },
  {
    name: 'Atragantamiento',
    screen: 'Choking',
    icon: 'lungs',
    color: '#16a085',
  },
  {
    name: 'Electrocución',
    screen: 'Electrocution',
    icon: 'flash',
    color: '#2980b9',
  },
  {
    name: 'Infarto',
    screen: 'HeartAttack',
    icon: 'heart-broken',
    color: '#c0392b',
  },
];

const EmergencyHomeScreen = ({ navigation }) => {
  const [webSpanishVoice, setWebSpanishVoice] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      // A veces getVoices está vacío si se llama muy temprano, así que hacemos un retraso
      setTimeout(() => {
        const voices = window.speechSynthesis.getVoices();
        const spanish = voices.find((v) => v.lang.startsWith('es'));
        setWebSpanishVoice(spanish?.name || null);
      }, 200);
    }
  }, []);

  const speak = (text) => {
    Speech.speak(`Iniciando guía para ${text}`, {
      language: 'es-MX',
      voice: webSpanishVoice || undefined,
      rate: 0.9,
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: item.color }]}
      onPress={() => {
        speak(item.name);
        navigation.navigate(item.screen);
      }}
    >
      <MaterialCommunityIcons name={item.icon} size={32} color="#fff" />
      <Text style={styles.buttonText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué emergencia estás presenciando?</Text>
      <FlatList
        data={emergencies}
        renderItem={renderItem}
        keyExtractor={(item) => item.screen}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    elevation: 3,
    minHeight: 120,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default EmergencyHomeScreen;
