import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';


const JoinScreen = ({navigation}) => {
  const [joinState, setJoinState] = useState({"pin":"","name":""})
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../assets/front_src_imgs_kwizzie.png')}/>
        <Text style={styles.title}>Libre</Text>
        <Text style={styles.title}>Kwiz</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Aquí el PIN'
        onChangeText={text => setJoinState({...joinState, "pin":text.toUpperCase()})}
        value={joinState.pin}
      />
      <TextInput
        style={styles.input}
        placeholder='Aquí tu Alias'
        onChangeText={text => setJoinState({...joinState, "name":text})}
        value={joinState.name}
      />
      <TouchableOpacity
        accessible={true}
        accessibilityHint="Entrar al Qwiz"
        accessibilityLabel="¡Vamos!"
        accessibilityRole="button"
        onPress={()=>navigation.navigate('Game', { ...joinState })}>
        <View style={styles.button}>
          <Text style={styles.btnText}>¡VAMOS!</Text>
        </View>
      </TouchableOpacity>
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
  input: {
    height: 54,
    width:'100%',
    backgroundColor:'#fff',
    color:'#000',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 16,
    fontSize: 18,
    fontWeight:"700"
  },
  header: {
    alignItems: "center",
    textAlign: "center",
    width:'100%',
    marginBottom: 32,
  },
  logo: {
    marginBottom: 16
  },
  title: {
    fontWeight: "700",
    lineHeight: 56,
    fontSize: 56,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 5,
    height: 54,
    justifyContent: "center"
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight:"700",
    textAlign: "center"
  }
});

export default JoinScreen;
