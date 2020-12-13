import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import GameContainer from '../components/GameContainer';

export const GameScreen = (props) => {
  const gameProps = {
    pincode: props.route.params.pin,
    name:props.route.params.name
  }
  const webSocket = new WebSocket(`ws://librekwiz.com/ws/quiz/${gameProps.pincode}/${gameProps.name}`);

  return (
    <View style={styles.container}>
      <GameContainer props={gameProps} webSocket={webSocket}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
