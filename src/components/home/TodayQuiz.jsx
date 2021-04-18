import React from 'react';
import PropTypes from 'prop-types';
import HomeElement from 'components/home/HomeElement';
import QuizItem from 'container/quiz/QuizItemContainer';

const TodayQuiz = ({ maintitle, subtitle, quiz }) => {
  return (
    <HomeElement maintitle={maintitle} subtitle={subtitle} width="50%">
      <QuizItem quiz={quiz} />
    </HomeElement>
  );
};

TodayQuiz.propTypes = {
  maintitle: PropTypes.string,
  subtitle: PropTypes.string,
  quiz: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rightAnswer: PropTypes.number.isRequired,
    commentary: PropTypes.string.isRequired,
  }),
};

TodayQuiz.defaultProps = {
  maintitle: "Today's Quiz",
  subtitle: 'One quiz everyday',
  quiz: {
    author: '',
    title: '',
    answers: [],
    rightAnswer: 1,
    commentary: '',
  },
};

export default TodayQuiz;
