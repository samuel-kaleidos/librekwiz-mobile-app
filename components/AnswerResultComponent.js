import React from 'react';
import {  Text, View, Image, StyleSheet } from 'react-native';

const AnswerResultComponent = ({isCorrect}) => (
  isCorrect ?
    <View style={styles.correctAnswerContainer}>
      <Image source={require('../assets/img/kwizzie-happy.png')}/>
      <Text style={styles.title}>¡Correcto!</Text>
      <Text style={styles.text}>A por la siguiente</Text>
    </View>
    :
    <View style={styles.errorAnswerContainer}>
      <Image source={require('../assets/img/kwizzie-mecachis.png')}/>
      <Text style={styles.title}>¡Ay mecachis!</Text>
      <Text style={styles.text}>Suerte con la próxima</Text>
    </View>
  );


const styles = StyleSheet.create({
  correctAnswerContainer: {
    alignItems:"center",
    backgroundColor: "#83FFCD",
    justifyContent: "center",
    flex: 1
  },
  errorAnswerContainer: {
    justifyContent: "center",
    alignItems:"center",
    backgroundColor: "#FC92AB",
    flex: 1
  },
  title: {
    fontFamily:"poppins-medium",
    fontSize: 36,
    textAlign: "center",
    marginBottom: 30
  },
  text: {
    fontFamily: "poppins-regular",
    fontSize: 18,
    textAlign:"center",
  }
});

export default AnswerResultComponent;