import React, { Fragment, useState, useEffect } from 'react';

import {  Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import  WaitingComponent from './WaitingComponent';
import CardContainerComponent from './CardContainerComponent';


const GameContainer = ({webSocket, props}) => {
  const [isAnswered, setIsAnswered] = useState(false)
  const [state, setState] = useState({
    command: '',
    text: '',
    options: [],
    correct: '',
    statistics: {},
    answer: '',
    ranking: {},
    counterQuestions: 0,
    numQuestions: null,
    score: 0,
    position: 0
  })

  useEffect(()=>{
    webSocket.onmessage = ({data})=>{
      const obj = JSON.parse(data)
      console.log(obj)
      if(obj.command === 'QUESTION') {
        setState({
          ...state,
          command: 'QUESTION',
          text: obj.data.text,
          options: obj.data.options,
          counterQuestions: state.counterQuestions + 1
        })
      }
      else if (obj.command === 'JOIN') {
        setIsAnswered(false)
        setState({
          ...state,
          numQuestions: obj.data.numquestions
        })
      }
      else if (obj.command === 'STATISTICS') {
        setIsAnswered(false)
        const score = state.answer === obj.data.correct ? state.score + 1 : state.score
        setState({
          ...state,
          command: 'STATISTICS',
          correct: obj.data.correct,
          statistics: obj.data.statistics,
          score: score
        })
      }
      else if (obj.command === 'END') {
        let sortedRanking = Object.keys(obj.data).map((alias) => {
          return {
            alias,
            points: obj.data[alias]
          }
        })
        sortedRanking.sort((a,b) => b.points - a.points)

        let position = 0
        sortedRanking.map((item, index) => {
          if (item.alias === props.name) {
            position = index +1
          }
          return true
        });

        setState({
          ...state,
          command: 'END',
          ranking: obj.data,
          position: position
        })
      }
    }
  })

  const sendAnswer = (answer)=>{
    setState({
      ...state,
      answer: answer
    })
    webSocket.send(answer);
    setIsAnswered(true);
  }
  if(isAnswered) {
    return <View>
        <Text style={styles.titleWaiting}>¿Qué será, será?</Text>
        <Text style={styles.textWaiting}>Forever will be, will be</Text>
      </View>
  }

  return (
    <View style={styles.container}>
      { !state.command ? <WaitingComponent/> : <CardContainerComponent {...props} {...state} sendAnswer={sendAnswer}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }

});

export default GameContainer;
