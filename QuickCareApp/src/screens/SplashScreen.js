import React, { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  const viewRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (viewRef.current) {
        viewRef.current.fadeOut(500).then(() => {
          navigation.replace('Home');
        });
      } else {
        navigation.replace('Home');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animatable.View
      ref={viewRef}
      animation="fadeIn"
      duration={800}
      style={styles.container}
    >
      <Animatable.Image
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
        source={require('../../assets/QuickCareLogoSinLetra.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>QuickCare</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 55,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});

export default SplashScreen;
