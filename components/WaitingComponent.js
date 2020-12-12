import React, { Fragment } from 'react';

import {  Text, View, StyleSheet, Image } from 'react-native';

const WaitingComponent = () => (
  <Fragment>
    <View style={styles.waitingContainer}>
      <Text style={styles.titleWaiting}>¡Ya estás dentro!</Text>
      <Text style={styles.textWaiting}>Paciencia que empezamos en nada</Text>
    </View>
    <View style={styles.waitingContainer}>
      <Image style={styles.logo} source={require('../assets/img/kwizzie-waiting.png')}/>
    </View>
  </Fragment>
);

const styles = StyleSheet.create({
  waitingContainer: {
    flex: 1,
    alignItems:"center",
    justifyContent: "center"
  },
  titleWaiting: {
    fontFamily:"poppins-bold",
    fontSize: 24,
  },
  textWaiting: {
    fontFamily:"poppins-regular",
    fontSize: 18,
  }
});

export default WaitingComponent;
