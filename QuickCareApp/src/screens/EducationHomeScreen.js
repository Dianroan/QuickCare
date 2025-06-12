import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const topics = [
  { title: 'Heridas y Hemorragias', lessonId: 'bleeding', icon: 'medkit-outline', color: '#e74c3c' },
  { title: 'Quemaduras', lessonId: 'burns', icon: 'flame-outline', color: '#e67e22' },
  { title: 'RCP', lessonId: 'cpr', icon: 'heart-outline', color: '#c0392b' },
  { title: 'Convulsiones', lessonId: 'seizures', icon: 'pulse-outline', color: '#9b59b6' },
  { title: 'Atragantamiento', lessonId: 'choking', icon: 'alert-circle-outline', color: '#3498db' },
  { title: 'Fracturas', lessonId: 'fractures', icon: 'bone-outline', color: '#16a085' },
  { title: 'Intoxicaciones', lessonId: 'intoxication', icon: 'skull-outline', color: '#2c3e50' },
  { title: 'Electrocución', lessonId: 'electrocution', icon: 'flash-outline', color: '#f1c40f' },
  { title: 'Infarto', lessonId: 'heart_attack', icon: 'heart-half-outline', color: '#d35400' },
  { title: 'Paro cardiorrespiratorio', lessonId: 'cardiac_arrest', icon: 'medical-outline', color: '#34495e' }
];

const EducationHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modo Educativo</Text>
      <Text style={styles.subtitle}>Aprende paso a paso cómo actuar en emergencias comunes.</Text>

      <FlatList
        data={topics}
        keyExtractor={(item) => item.lessonId}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate('LessonQuiz', { lessonId: item.lessonId })}
          >
            <Ionicons name={item.icon} size={42} color="#fff" />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const cardSize = (screenWidth - 60) / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  card: {
    width: cardSize,
    height: cardSize,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    elevation: 3,
  },
  cardText: {
    marginTop: 10,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default EducationHomeScreen;
