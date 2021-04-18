import React from 'react';
import TodayQuiz from 'components/home/TodayQuiz';

const TodayQuizContainer = () => {
  // @TODO Gets one random quiz from the server.
  const quiz = {
    author: 'Yunseo Hwang',
    title: 'Where is One?',
    answers: ['1', '2', '3', '4'],
    rightAnswer: 1,
    commentary: 'One is first element',
  };

  return <TodayQuiz quiz={quiz} />;
};

export default TodayQuizContainer;
