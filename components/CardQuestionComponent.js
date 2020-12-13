import React, { Fragment, useState, useEffect } from 'react';
import {  Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const CardQuestionComponent = (props) => {
  const letter = ["A", "B", "C", "D"];
  const answerBackgroundColors = ["#ffa97a", "#bdb8fc", "#83ffcd", "#fc92ab"];
  return (
    <Fragment>
      <View style={styles.questionContainer}>
        <Text style={styles.questiontext}>{props.text}</Text>
      </View>
      <View style={styles.answerContainer}>
        {props.options.map((item, index)=> item.text ?
        <TouchableOpacity key={index}
          style={{...styles.answerOption, backgroundColor:answerBackgroundColors[index] }}
          onPress={()=>props.sendAnswer(item.text)} >
          <Text style={styles.letterText}>{letter[index]}</Text>
          <Text style={styles.answerText}>{item.text}</Text>
        </TouchableOpacity>:null)}
      </View>
    </Fragment>
);}

const styles = StyleSheet.create({
  questionContainer: {
    alignItems:"center",
    flex:1,
    justifyContent: "center"
  },
  questiontext: {
    fontFamily:"poppins-medium",
    fontSize:24,
  },
  answerContainer:{
    flex: 3
  },
  answerOption: {
    flex: 1,
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"space-between",
    borderTopWidth: 1,
    borderColor: "black"
  },
  answerText: {
    fontFamily: "poppins-medium",
    fontSize: 18,
    textAlign:"left",
    width: "85%",
    paddingRight: 16
  },
  letterText: {
    fontFamily: "poppins-medium",
    fontSize: 40,
    textAlign:"center",
    width: "15%"
  },
  texts:{
    fontFamily:"poppins-medium",
    fontSize:14,
  }
});

export default CardQuestionComponent;