import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const topics = [
  { title: 'Reanimación cardiopulmonar (RCP)', screen: 'RCP' },
  { title: 'Heridas y Hemorragias', screen: 'BleedingInfo' },
  { title: 'Convulsiones', screen: 'SeizureInfo' },
  { title: 'Obstrucción de vías respiratorias', screen: 'ChokingInfo' },
  { title: 'Fracturas', screen: 'FractureInfo' },
  // Puedes seguir agregando más temas
];

const EducationHomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Modo Educativo</Text>
      <Text style={styles.subtitle}>
        Aprende a actuar en situaciones de emergencia con esta guía interactiva.
      </Text>

      {topics.map((topic, index) => (
        <TouchableOpacity
          key={index}
          style={styles.topicButton}
          onPress={() => navigation.navigate(topic.screen)}
        >
          <Text style={styles.topicText}>{topic.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#555',
  },
  topicButton: {
    backgroundColor: '#34c759',
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },
  topicText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EducationHomeScreen;
