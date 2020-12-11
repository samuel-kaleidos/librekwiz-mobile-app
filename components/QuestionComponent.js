import React, { Fragment, useState, useEffect } from 'react';

import {  Text, View, TouchableOpacity } from 'react-native';


const QuestionComponent = ({webSocket, props}) => {
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
        <Text>¿Qué será, será?</Text>
        <Text>Forever will be, will be</Text>
      </View>
  }

  const arr = [{class:'a-A', type: 'A'}, {class:'a-B', type: 'B'}, {class:'a-C', type: 'C'}, {class:'a-D', type: 'D'}]

  return (
    <View>
      { !state.command ? 
        <View>
          <Text>¡Ya estás dentro!</Text>
          <Text>Paciencia que empezamos en nada</Text>
        </View>
        :
        <View>
          <View>
            <Text>Pin {props.pincode}</Text>
            <Text>{state.counterQuestions}/{state.numQuestions}</Text>
          </View>
          <View>
            {(()=>{
              switch (state.command) {
                case 'QUESTION':
                  return <View>
                    <Text>{state.text}</Text>
                    <View>
                      {state.options.map((item, index)=>
                      <TouchableOpacity onPress={()=>sendAnswer(state.options[index].text)}>
                        <Text>{state.options[index].type}</Text>
                        <Text>{state.options[index].text}</Text>
                      </TouchableOpacity>)}
                    </View>
                  </View>
                case 'STATISTICS':
                  (state.correct === state.answer) ?
                  <View>
                    <Text>¡Correcto!</Text>
                    <Text>A por la siguiente</Text>
                  </View>
                  :
                  <View>
                    <Text>¡Ay mecachis!</Text>
                    <Text>Suerte con la próxima</Text>
                  </View>
                case 'END':
                  return <View>
                    <Text>Has quedado en la posición</Text>
                    <Text>{state.position}</Text>
                  </View>
                }
              })()
            }
          </View>
          <View>
            <Text>{ props.name }</Text>
            <Text>{state.score} puntos</Text>
          </View>
        </View>
      }
    </View>
  )
}

export default QuestionComponent;
