import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';

const CardHeaderComponent = (props) => (
  <View style={styles.container}>
    <Text style={styles.texts}>Pin <Text style={{fontFamily:"poppins-bold"}}>{props.pincode}</Text></Text>
    <Text style={styles.texts}>{props.counterQuestions}/{props.numQuestions}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height:36,
    alignItems:"center",
    justifyContent:"space-between",
  },
  texts:{
    fontFamily:"poppins-medium",
    fontSize:14,
    padding: 8
  }
});

export default CardHeaderComponent;