import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const HospitalMapView = () => {
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permiso de ubicación denegado');
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);

      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${loc.coords.latitude},${loc.coords.longitude}&radius=5000&type=hospital&key=${process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}`
        );
        const data = await response.json();
        const parsed = data.results.slice(0, 5).map((place) => ({
          name: place.name,
          latitude: place.geometry.location.lat,
          longitude: place.geometry.location.lng,
          address: place.vicinity,
          isOpen: place.opening_hours?.open_now ?? null,
        }));
        setHospitals(parsed);
      } catch (e) {
        console.log(e);
        setErrorMsg('Error al obtener hospitales cercanos');
      }
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
    <View style={{ flex: 1 }}>
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
            description={hospital.address}
          />
        ))}
      </MapView>
      <View style={styles.listContainer}>
        {hospitals.map((hospital, index) => (
          <View key={index} style={styles.hospitalCard}>
            <Text style={styles.hospitalName}>{hospital.name}</Text>
            <Text style={styles.hospitalAddress}>{hospital.address}</Text>
            {hospital.isOpen !== null && (
              <Text style={{ color: hospital.isOpen ? 'green' : 'red' }}>
                {hospital.isOpen ? 'Abierto ahora' : 'Cerrado ahora'}
              </Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: { flex: 1 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listContainer: { padding: 10, backgroundColor: '#f4f4f4' },
  hospitalCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  hospitalName: { fontSize: 16, fontWeight: 'bold', marginBottom: 2 },
  hospitalAddress: { fontSize: 14, color: '#555' },
});

export default HospitalMapView;