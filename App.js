import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen'
import JoinScreen from './screens/JoinScreen'
import { GameScreen } from './screens/GameScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins-black': require('./assets/fonts/Poppins-Black.ttf'),
    'poppins-black-italic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'poppins-bold-italic': require('./assets/fonts/Poppins-BoldItalic.ttf'),
    'poppins-extra-bold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'poppins-extra-bold-italic': require('./assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    'poppins-extra-light': require('./assets/fonts/Poppins-ExtraLight.ttf'),
    'poppins-extra-light-italic': require('./assets/fonts/Poppins-ExtraLightItalic.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-medium-italic': require('./assets/fonts/Poppins-MediumItalic.ttf'),
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-semi-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-semi-bold-italic': require('./assets/fonts/Poppins-SemiBoldItalic.ttf'),
    'poppins-thin': require('./assets/fonts/Poppins-Thin.ttf'),
    'poppins-thin-italic': require('./assets/fonts/Poppins-ThinItalic.ttf')
  });
};

const Stack = createStackNavigator();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if(!dataLoaded){
    return (
      <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} />
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Join Game" component={JoinScreen}/>
        <Stack.Screen name="Game" component={GameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
