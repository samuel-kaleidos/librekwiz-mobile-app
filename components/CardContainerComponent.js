import React, { Fragment, useState, useEffect } from 'react';
import {  Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CardFooterComponent from './CardFooterComponent';
import CardHeaderComponent from './CardHeaderComponent';
import CardQuestionComponent from './CardQuestionComponent';

const CardContainerComponent = (props)=>(
  <Fragment>
    <CardHeaderComponent
      pincode={props.pincode}
      counterQuestions={props.counterQuestions}
      numQuestions={props.numQuestions}
    />
    <View style={{flex:1}}>
      {(()=>{
        switch (props.command) {
          case 'QUESTION':
            return <CardQuestionComponent text={props.text} options={props.options} sendAnswer={props.sendAnswer}/>
          case 'STATISTICS':
            (props.correct === props.answer) ?
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
              <Text>{props.position}</Text>
            </View>
          }
        })()
      }
    </View>
    <CardFooterComponent
      name={props.name}
      score={props.score}
    />
</Fragment>
);

export default CardContainerComponent;