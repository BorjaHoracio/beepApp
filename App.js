import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationContainer from './navigation/Router';
import * as Font from 'expo-font';
import { Provider } from 'react-redux';
import store from 'beep/app/Store';
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          'sniglet': require('./assets/fonts/Sniglet-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
      return (
        <Provider store={store}>
        <View style={styles.container}>
          <NavigationContainer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
