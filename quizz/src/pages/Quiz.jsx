import React from 'react'
import questions from '../data/questions'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

export default function Quizpage() {

const [index, setIndex] = useState(0)
const [len, setLen] = useState(questions.length)
const [score, setScore] = useState(0)

  const nextquestion = (ind) => {
    if(index < len){
      if(questions[index].answer == questions[index].options[ind]){
          setScore(score + 1);
      }
      setIndex(index + 1)

    }else{
      console.log("quizz ended")
    }
    
  }
  if (index >= len) {
    localStorage.setItem( 'score', score)
    return <Navigate to="/result" replace />;

  } else {
      return (
        <>

          <h1>{questions[index].question}</h1>
        
            {questions[index].options.map((option, optionIndex) => 
              <button key={optionIndex} onClick={() => nextquestion(optionIndex)}>{option}</button>
            )}
        </>
      )
  }
}
