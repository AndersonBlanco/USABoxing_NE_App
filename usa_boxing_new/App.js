import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SVG from "./imgs/usaBoxingNE_logo.png"; 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>USA Boxing App</Text>
      <StatusBar style="auto" />
      <Image source={SVG} height={100} width={100}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
