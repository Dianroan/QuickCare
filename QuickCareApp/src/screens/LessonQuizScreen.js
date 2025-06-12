import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import lessons from '../data/lessons_detailed.json';

const LessonQuizScreen = ({ route, navigation }) => {
  const { lessonId } = route.params;
  const lesson = lessons.find((l) => l.id === lessonId);

  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [phase, setPhase] = useState('info'); // 'info', 'question', 'final', 'result'
  const [finalIndex, setFinalIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const currentSection = lesson.sections[step];
  const currentQuestion = currentSection?.question;
  const finalQuestion = lesson.finalQuestions[finalIndex];
  const themeColor = lesson.color || '#34c759';

  const handleAnswer = (index, correctIndex) => {
    setSelectedOption(index);
    if (index === correctIndex) setScore(score + 1);
    setTimeout(() => {
      setSelectedOption(null);
      if (phase === 'question') {
        if (step < lesson.sections.length - 1) {
          setStep(step + 1);
          setPhase('info');
        } else {
          setPhase('final');
        }
      } else if (phase === 'final') {
        if (finalIndex < lesson.finalQuestions.length - 1) {
          setFinalIndex(finalIndex + 1);
        } else {
          setPhase('result');
        }
      }
    }, 700);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={[styles.title, { color: themeColor }]}>{lesson.title}</Text>

      {phase === 'info' && (
        <View>
          <Text style={styles.info}>{currentSection.info}</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: themeColor }]} onPress={() => setPhase('question')}>
            <Text style={styles.buttonText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
      )}

      {phase === 'question' && (
        <View>
          <Text style={styles.question}>{currentQuestion.text}</Text>
          {currentQuestion.options.map((opt, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.option, selectedOption === idx && (idx === currentQuestion.answerIndex ? styles.correct : styles.incorrect)]}
              onPress={() => handleAnswer(idx, currentQuestion.answerIndex)}
              disabled={selectedOption !== null}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {phase === 'final' && (
        <View>
          <Text style={styles.question}>{finalQuestion.text}</Text>
          {finalQuestion.options.map((opt, idx) => (
            <TouchableOpacity
              key={idx}
              style={[styles.option, selectedOption === idx && (idx === finalQuestion.answerIndex ? styles.correct : styles.incorrect)]}
              onPress={() => handleAnswer(idx, finalQuestion.answerIndex)}
              disabled={selectedOption !== null}
            >
              <Text style={styles.optionText}>{opt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {phase === 'result' && (
        <View>
          <Text style={styles.result}>Tu calificación: {Math.round((score / (lesson.sections.length + lesson.finalQuestions.length)) * 100)}%</Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: themeColor }]} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  info: {
    fontSize: 18,
    marginBottom: 20
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  option: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 10
  },
  optionText: {
    fontSize: 16
  },
  correct: {
    backgroundColor: '#c8e6c9'
  },
  incorrect: {
    backgroundColor: '#ffcdd2'
  },
  button: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  result: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30
  }
});

export default LessonQuizScreen;