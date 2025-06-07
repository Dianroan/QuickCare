import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking, Image } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const HomeScreen = ({ navigation }) => {
  const handleCall = () => {
    Linking.openURL('tel:911');
  };

  const handleLocation = () => {
    navigation.navigate('HospitalMap'); // pantalla que haremos después
  };

  return (
    <Animatable.View animation="fadeInUp" duration={800} style={styles.container}>
      
      <Image
        source={require('../../assets/QuickCareLogoSinFondo.png')}
        style={styles.logo}
      />

      <Text style={styles.title}>Primeros Auxilios Interactivos</Text>

      <View style={styles.buttonGroup}>

        <TouchableOpacity style={styles.bigButtonRed} onPress={() => navigation.navigate('EmergencyHome')}>
          <Ionicons name="medical" size={32} color="#fff" style={styles.iconLarge} />
          <Text style={styles.bigButtonText}>Modo Emergencia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bigButtonBlue} onPress={() => navigation.navigate('EducationHome')}>
          <Ionicons name="book" size={30} color="#fff" style={styles.iconLarge} />
          <Text style={styles.bigButtonText}>Modo Educativo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bigButtonDark} onPress={handleLocation}>
          <MaterialCommunityIcons name="hospital-marker" size={30} color="#fff" style={styles.iconLarge} />
          <Text style={styles.bigButtonText}>Hospitales cercanos</Text>
        </TouchableOpacity>
      </View>

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
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 80,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#222',
  },
  buttonGroup: {
    width: '100%',
    gap: 18,
  },
  bigButtonRed: {
    backgroundColor: '#ff3b30',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  bigButtonBlue: {
    backgroundColor: '#007aff',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  bigButtonDark: {
    backgroundColor: '#1c1c1e',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  bigButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  iconLarge: {
    marginBottom: 5,
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 100,
    position: 'absolute',
    bottom: 25,
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
