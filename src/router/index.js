import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Address, SignIn, SignUp, SplashScreen} from '../pages';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splashscreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
          <Stack.Screen
        name="Address"
        component={Address}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;