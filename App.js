import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemeGeneratorScreen from './app/screens/MemeGeneratorScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MemeGeneratorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a936f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
