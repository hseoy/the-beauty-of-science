import React from 'react';
import PropTypes from 'prop-types';
import HomeElement from 'components/home/HomeElement';
import QuizItem from 'container/quiz/QuizItemContainer';
import { useTranslation } from 'react-i18next';

const TodayQuiz = ({ quiz }) => {
  const { t } = useTranslation();

  return (
    <HomeElement
      maintitle={t('homeElement.todayQuizMaintitle')}
      subtitle={t('homeElement.todayQuizSubtitle')}
      width="50%"
    >
      <QuizItem quiz={quiz} />
    </HomeElement>
  );
};

TodayQuiz.propTypes = {
  quiz: PropTypes.shape({
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rightAnswer: PropTypes.number.isRequired,
    commentary: PropTypes.string.isRequired,
  }),
};

TodayQuiz.defaultProps = {
  quiz: {
    author: '',
    title: '',
    answers: [],
    rightAnswer: 1,
    commentary: '',
  },
};

export default TodayQuiz;
