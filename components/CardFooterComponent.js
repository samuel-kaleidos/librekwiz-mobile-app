import React from 'react';
import {  Text, View, StyleSheet } from 'react-native';

const CardFooterComponent = (props) => (
  <View style={styles.container}>
    <Text style={styles.texts}>{ props.name }</Text>
    <Text style={styles.texts}>{props.score} puntos</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    flexDirection: "row",
    height:32,
    justifyContent:"space-between",
  },
  texts:{
    fontFamily:"poppins-bold",
    fontSize:14,
    padding: 8
  }
});

export default CardFooterComponent;