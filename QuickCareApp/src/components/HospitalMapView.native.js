import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const HospitalMapView = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const hospitals = [
    { name: 'Hospital General', latitude: 20.676722, longitude: -103.347153 },
    { name: 'Cruz Roja', latitude: 20.6597, longitude: -103.3496 },
    { name: 'Hospital San José', latitude: 20.6843, longitude: -103.3952 },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permiso de ubicación denegado');
        return;
      }
      let loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007aff" />
        <Text style={{ marginTop: 20 }}>Obteniendo ubicación...</Text>
        {errorMsg && <Text style={{ color: 'red' }}>{errorMsg}</Text>}
      </View>
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
      showsUserLocation={true}
    >
      {hospitals.map((hospital, index) => (
        <Marker
          key={index}
          coordinate={{
            latitude: hospital.latitude,
            longitude: hospital.longitude,
          }}
          title={hospital.name}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default HospitalMapView;
