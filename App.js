import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AstarSimulator from './components/astarSimulator';

export default function App() {
  return (
    <View style={styles.container}>
      <AstarSimulator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  webview: {}
});
