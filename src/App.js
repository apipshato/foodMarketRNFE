/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
//import {SafeAreaView, Text, StatusBar} from 'react-native';
import {SplashScreen, SignIn} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <SignIn/>
    </NavigationContainer>
  );
};

export default App;
