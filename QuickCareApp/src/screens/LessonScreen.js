import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import lessons from '../data/lessons.json';

const LessonScreen = ({ route }) => {
  const { lessonId } = route.params;
  const lesson = lessons.find((l) => l.id === lessonId);
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = lesson.steps[stepIndex];

  // Colores por lección para coherencia visual
  const colorMap = {
    bleeding: '#e74c3c',
    burns: '#e67e22',
    cpr: '#c0392b',
    seizures: '#9b59b6',
    choking: '#3498db',
    fractures: '#16a085',
    intoxication: '#2c3e50',
    electrocution: '#f1c40f',
    heart_attack: '#d35400',
    cardiac_arrest: '#34495e',
  };

  const themeColor = colorMap[lessonId] || '#34c759';

  return (
    <View style={[styles.container, { backgroundColor: themeColor + '11' }]}>
      <Text style={[styles.title, { color: themeColor }]}>{lesson.title}</Text>
      <Image source={{ uri: currentStep.image }} style={styles.image} />
      <Text style={styles.text}>{currentStep.text}</Text>

      <View style={styles.navButtons}>
        <Button
          title="Anterior"
          onPress={() => setStepIndex(stepIndex - 1)}
          disabled={stepIndex === 0}
          color={themeColor}
        />
        <Button
          title={stepIndex === lesson.steps.length - 1 ? 'Finalizar' : 'Siguiente'}
          onPress={() => {
            if (stepIndex < lesson.steps.length - 1) {
              setStepIndex(stepIndex + 1);
            }
          }}
          disabled={stepIndex === lesson.steps.length}
          color={themeColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    borderRadius: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LessonScreen;
