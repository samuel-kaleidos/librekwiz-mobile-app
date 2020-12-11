import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import QuestionComponent from '../components/QuestionComponent';

export const GameScreen = (props) => {
  const gameProps = {
    pincode: props.route.params.pin,
    name:props.route.params.name
  }
  const webSocket = new WebSocket(`ws://librekwiz.com/ws/quiz/${gameProps.pincode}/${gameProps.name}`);




  console.log(props.route.params.name, props.route.params.pin)
  return (
    <View>
      <Text>Pagina Preguntas</Text>
      <QuestionComponent props={gameProps} webSocket={webSocket}/>
    </View>
  )
}
