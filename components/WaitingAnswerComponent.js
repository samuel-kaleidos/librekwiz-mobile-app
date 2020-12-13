import React from 'react';
import {  Text, View, Image, StyleSheet } from 'react-native';

const WaitingAnswerComponent = () =>(
  <View style={styles.waitAnswerContainer}>
    <Text style={styles.textWaiting}>¿Qué será, será?</Text>
    <Image source={require('../assets/img/kwizzie-doubt.png')}/>
    <Text style={styles.textWaiting}>Forever will be, will be</Text>
  </View>
);

const styles = StyleSheet.create({
  waitAnswerContainer: {
    alignItems:"center",
    justifyContent:"space-evenly",
    flex: 1,
    backgroundColor: '#fff'
  },
  textWaiting: {
    fontFamily: "poppins-medium",
    fontSize: 36,
    textAlign:"center",
    width:"60%"
  }
});

export default WaitingAnswerComponent;