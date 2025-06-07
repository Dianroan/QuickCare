import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({ navigation }) => {
  const handleCall = () => {
    Linking.openURL('tel:911');
  };

  return (
    <Animatable.View animation="fadeInUp" duration={800} style={styles.container}>
      
      <Image
        source={require('../../assets/QuickCareLogoSinFondo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Primeros Auxilios Interactivos</Text>

      <TouchableOpacity style={styles.buttonRed} onPress={() => navigation.navigate('EmergencyHome')}>
        <Ionicons name="alert-circle" size={22} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Modo Emergencia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBlue} onPress={() => navigation.navigate('EducationHome')}>
        <Ionicons name="book" size={22} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Modo Educativo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.callButton} onPress={handleCall}>
        <Ionicons name="call" size={20} color="#fff" />
        <Text style={styles.callText}>Llamar al 911</Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#222',
  },
  buttonRed: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff3b30',
    padding: 18,
    borderRadius: 15,
    width: '100%',
    marginBottom: 15,
  },
  buttonBlue: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007aff',
    padding: 18,
    borderRadius: 15,
    width: '100%',
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 100,
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  callText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default HomeScreen;
