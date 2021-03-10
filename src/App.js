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
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
};

export default App;
