import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuizItemTemplate from 'components/quiz/QuizItemTemplate';
import QuizItemResult from 'components/quiz/QuizItemResult';
import QuizItemCommentary from 'components/quiz/QuizItemCommentary';

const QuizItemContainer = ({ quiz }) => {
  const { rightAnswer, commentary } = quiz;

  const [selected, setSelected] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [showCommentary, setShowCommentary] = useState(false);

  const onSelect = num => {
    setIsRight(num === rightAnswer);
    setSelected(true);
  };

  const onClickTryAgain = () => {
    setSelected(false);
    setIsRight(false);
    setShowCommentary(false);
  };

  const onClickCommentary = () => {
    setShowCommentary(true);
  };

  return (
    <QuizItemTemplate quiz={quiz} selected={selected} onSelectAnswer={onSelect}>
      {!showCommentary ? (
        <QuizItemResult
          isRight={isRight}
          onClickTryAgain={onClickTryAgain}
          onClickCommentary={onClickCommentary}
        />
      ) : (
        <QuizItemCommentary onClickTryAgain={onClickTryAgain}>
          {commentary}
        </QuizItemCommentary>
      )}
    </QuizItemTemplate>
  );
};

QuizItemContainer.propTypes = {
  quiz: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.string),
    rightAnswer: PropTypes.number,
    commentary: PropTypes.string,
  }),
};

QuizItemContainer.defaultProps = {
  quiz: {
    author: 'author',
    title: 'title',
    answers: [],
    rightAnswer: 1,
    commentary: '',
  },
};

export default QuizItemContainer;
