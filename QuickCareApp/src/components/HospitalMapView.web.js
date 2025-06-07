import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

const HospitalMapView = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

  const mapUrl = `https://www.google.com/maps/embed/v1/search?key=AIzaSyDn1xJk9ihBMJhGEFtDsJErO_7PJ1pphFg&q=hospital&center=${location.latitude},${location.longitude}&zoom=13`;

  return (
    <View style={styles.webContainer}>
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: 10 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  webContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 10,
  },
});

export default HospitalMapView;
