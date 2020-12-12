import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/front_src_imgs_kwizzie.png')}/>
        <Text style={styles.title}>Libre</Text>
        <Text style={styles.title}>Kwiz</Text>
      </View>
      <View style={styles.buttonsContainer}>
      <TouchableOpacity
          accessible={true}
          accessibilityHint="Entrar para jugar al Quiz al Qwiz"
          accessibilityLabel="Play Game"
          accessibilityRole="button"
          onPress={()=>navigation.navigate('Join Game')}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Jugar a un Kwiz</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          disabled = {true}
          accessible={true}
          accessibilityHint="Entrar para jugar al Quiz al Qwiz"
          accessibilityLabel="Create Game"
          accessibilityRole="button"
          onPress={()=>navigation.navigate('Game', { ...joinState })}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Crear nuevo Kwiz</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          disabled = {true}
          accessible={true}
          accessibilityHint="Entrar para jugar al Quiz al Qwiz"
          accessibilityLabel="Play Game"
          accessibilityRole="button"
          onPress={()=>navigation.navigate('JoinScreen')}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Usar Código de Kwiz existente</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#83ffcd',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  header: {
    alignItems: "center",
    flex:2,
    justifyContent:"center",
    marginBottom: 32,
    textAlign: "center",
    width:'100%',
  },
  logo: {
    marginBottom: 16
  },
  title: {
    fontFamily: "poppins-bold",
    lineHeight: 66,
    fontSize: 56,
  },
  buttonsContainer: {
    flex:1,
    paddingBottom: 32,
    justifyContent:"space-around"
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 12,
    height: 54,
    justifyContent: "center"
  },
  btnText: {
    color: "black",
    fontSize: 18,
    fontFamily: "poppins-medium",
    textAlign: "center"
  }
});

export default HomeScreen;
