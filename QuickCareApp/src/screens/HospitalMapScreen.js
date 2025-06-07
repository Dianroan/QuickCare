import React from 'react';
import { View, StyleSheet } from 'react-native';
import HospitalMapView from '../components/HospitalMapView';

const HospitalMapScreen = () => {
  return (
    <View style={styles.container}>
      <HospitalMapView />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HospitalMapScreen;
