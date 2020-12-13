import React from 'react';
import {  Text, View, Image, StyleSheet } from 'react-native';

const FinalGameComponent = (props) => (
  <View style={styles.resultContainer}>
    {props.position <= 3 ?
      <Image source={require('../assets/img/kwizzie-winner.png')}/> :
      <Image source={require('../assets/img/kwizzie-end.png')}/>
    }
    <Text style={styles.text}>Has quedado en la posición</Text>
    <Text style={styles.text}>{props.position}</Text>
  </View>
);

const styles = StyleSheet.create({
  resultContainer: {
    alignItems:"center",
    justifyContent:"center",
    flex: 1,
    backgroundColor: '#000'
  },
  text: {
    fontFamily: "poppins-medium",
    color: '#83FFCD',
    fontSize: 36,
    textAlign:"center",
    width:"80%"
  }
});

export default FinalGameComponent;