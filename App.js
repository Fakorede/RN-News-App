import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store/index';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold, Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 
  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
 );  
}

const styles = StyleSheet.create({
});
