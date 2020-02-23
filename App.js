import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationContainer from './navigation/Router';
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
