import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Libre</Text>
      <Text style={styles.title}>Kwiz</Text>
      <TextInput
        style={styles.input}
        placeholder='Aquí el PIN'
        // onChangeText={text => onChangeText(text)}
        // value={value}
      />
      <TextInput
        style={styles.input}
        placeholder='Aquí tu Alias'
        // onChangeText={text => onChangeText(text)}
        // value={value}
      />
      <Button
        // onPress={onPressLearnMore}
        height= '54'
        style={styles.boton}
        title="¡VAMOS!"
        color="#000"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
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
  },
  title: {
    fontWeight: "700",
    lineHeight: 56,
    fontSize: 56,
    textAlign: "center",
    width:'100%',
  }
});
