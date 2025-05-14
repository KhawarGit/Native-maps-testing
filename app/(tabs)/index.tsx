import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import markers from '@/assets/markers';
export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={markers[0].coordinates}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
