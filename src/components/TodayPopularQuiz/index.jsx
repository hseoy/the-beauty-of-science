import React from 'react';
import PropTypes from 'prop-types';
import HomeElement from 'components/HomeElement';
import QuizItem from 'components/QuizItem';

const TodayPopularQuiz = ({ signed }) => {
  const quiz = {
    author: 'Yunseo Hwang',
    title: 'Where is One?',
    answers: ['1', '2', '3', '4'],
    rightAnswer: '1',
    commentary: 'One is first element',
  };

  return (
    <HomeElement title="Today's Most Popular Quiz" width="50%">
      <QuizItem signed={signed} quiz={quiz} />
    </HomeElement>
  );
};

TodayPopularQuiz.propTypes = {
  signed: PropTypes.bool,
};

TodayPopularQuiz.defaultProps = {
  signed: false,
};

export default TodayPopularQuiz;
