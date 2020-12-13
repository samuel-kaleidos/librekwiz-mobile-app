import React, { Fragment } from 'react';
import {  Text, View } from 'react-native';
import CardFooterComponent from './CardFooterComponent';
import CardHeaderComponent from './CardHeaderComponent';
import CardQuestionComponent from './CardQuestionComponent';
import WaitingAnswerComponent from './WaitingAnswerComponent';
import AnswerResultComponent from './AnswerResultComponent';
import FinalGameComponent from './FinalGameComponent';

const CardContainerComponent = (props)=>{
  const isCorrect= props.correct === props.answer
  return (
    <Fragment>
      <CardHeaderComponent
        pincode={props.pincode}
        counterQuestions={props.counterQuestions}
        numQuestions={props.numQuestions}
      />
      { props.isAnswered ? <WaitingAnswerComponent/>
        :
        <View style={{flex:1}}>
          {(()=>{
            switch (props.command) {
              case 'QUESTION':
                return <CardQuestionComponent text={props.text} options={props.options} sendAnswer={props.sendAnswer}/>
              case 'STATISTICS':
                return <AnswerResultComponent isCorrect={isCorrect} />
              case 'END':
                return <FinalGameComponent position={props.position}/>
              }
            })()
          }
        </View>
      }
      <CardFooterComponent
        name={props.name}
        score={props.score}
      />
    </Fragment>
  )
};

export default CardContainerComponent;