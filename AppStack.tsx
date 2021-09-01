import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { useContext } from 'react';
import { LoginContext } from './src/utils/LoginProvider';
import LoadingScreen from './src/pages/loading_screen';
import HomeScreen from './src/pages/home_screen';
import LoginScreen from './src/pages/login_screen';

const Stack=createNativeStackNavigator();

export default function AppStack() {
  const {user,isLoading}=useContext(LoginContext);

  return (
  <NavigationContainer>
    <Stack.Navigator>
      {isLoading?<Stack.Screen name="loading" component={LoadingScreen}/>:user?
      <Stack.Screen name="home" component={HomeScreen}/>:
      <Stack.Screen name="login" component={LoginScreen}/>
      }
    </Stack.Navigator>
  </NavigationContainer>
  );
}