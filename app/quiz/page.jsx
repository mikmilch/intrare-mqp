'use client';
import React, { useState } from 'react';
import { quiz } from '../data.js';
import { logo } from 'logo.png';
import Link from 'next/link';

const page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  //   Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log('true');
    } else {
      setSelectedAnswer(false);
      console.log('false');
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  const previousQuestion = () => {
    setSelectedAnswerIndex(null);
    if (activeQuestion !== 0) {
      setActiveQuestion((prev) => prev - 1);
    }
    setChecked(false);
  };

  const goToHomePage = () => {
    router.push('app/page.js'); // Replace '/' with the correct path to your home page
  };

  return (
    <body>
      <Link href="/">
              <homebutton>X</homebutton>
      </Link>
      <main>
        <div className='container'>
            <br/><br/>
            <img src={logo} width="120" height="40" alt='logo'></img>
            <h1>Skills Profile</h1>
          <div>
            {!showResult ? (
              <div className='quiz-container'>
                <h3>{questions[activeQuestion].question}</h3>
                {answers.map((answer, idx) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={
                      selectedAnswerIndex === idx ? 'li-selected' : 'li-hover'
                    }
                  >
                    <span>{answer}</span>
                  </li>
                ))}
                <div className='filling-container'>
                  <div className="filling-box">
                    <div
                      className="filling-bar"
                      style={{ width: `${((activeQuestion ) / questions.length) * 100}%` }}
                    />
                  </div>
                  <h2 className="question-status">
                    {activeQuestion + 1}
                    <span>/{questions.length}</span>
                  </h2>
                </div>
                {checked ? (
                  <navbar>
                    <button 
                      onClick={previousQuestion}
                      disabled={activeQuestion === 0}
                      className={activeQuestion === 0 ? 'btn-disabled' : ''}
                      >PREVIOUS</button> 
                    <button onClick={nextQuestion} className='button'>
                      {activeQuestion === question.length - 1 ? 'Finish' : 'NEXT'}
                    </button>
                    
                  </navbar>
                ) : (
                  <navbar>
                    <button 
                      onClick={previousQuestion}
                      disabled={activeQuestion === 0}
                      className={activeQuestion === 0 ? 'btn-disabled' : ''}
                      >PREVIOUS</button>  
                    <button onClick={nextQuestion} disabled className='btn-disabled'>
                      {' '}
                      {activeQuestion === question.length - 1 ? 'Finish' : 'NEXT'}
                    </button>
                  </navbar>
                )}
              </div>
            ) : (
              <div className='quiz-container'>
                <h3>Results</h3>
                {/* <h3>Overall {(result.score / 25) * 100}%</h3>
                <p>
                  Total Questions: <span>{questions.length}</span>
                </p>
                <p>
                  Total Score: <span>{result.score}</span>
                </p>
                <p>
                  Correct Answers: <span>{result.correctAnswers}</span>
                </p> */}
                <p>
                  This is where the results will be displayed.
                </p>
              </div>
            )}
          </div>
        </div>
        </main>
  </body>
  );
};

export default page;