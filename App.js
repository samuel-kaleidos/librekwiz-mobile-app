import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import JoinGame from './screens/JoinGame'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ws://librekwiz.com/ws/quiz/4H74/Lucas%20Corbray
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Join Game"
          component={JoinGame}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
