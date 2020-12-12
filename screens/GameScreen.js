import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import QuestionComponent from '../components/QuestionComponent';

export const GameScreen = (props) => {
  const gameProps = {
    pincode: props.route.params.pin,
    name:props.route.params.name
  }
  const webSocket = new WebSocket(`ws://librekwiz.com/ws/quiz/${gameProps.pincode}/${gameProps.name}`);

  return (
    <View style={styles.container}>
      <QuestionComponent props={gameProps} webSocket={webSocket}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleWaiting: {
    fontFamily:"poppins-bold",
    fontSize: 36,
  },
  titleWaiting: {
    fontFamily:"poppins-regular",
    fontSize: 18,
  },
  logo: {
    flex:1
  },

});
