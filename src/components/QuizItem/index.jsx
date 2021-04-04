import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Answers from './Answers';
import Result from './Result';
import * as S from './style';

const QuizItem = ({ signed, quiz }) => {
  const { author, title, answers, rightAnswer, commentary } = quiz;
  const quizAnswers = [...answers];

  while (quizAnswers.length < 4) {
    quizAnswers.push('empty');
  }

  const [submitted, setSubmitted] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [showCommentary, setShowCommentary] = useState(false);

  const isSubmitted = num => {
    setIsRight(quizAnswers[num] === rightAnswer);
    setSubmitted(true);
  };

  const signedButtonClickHandler = () => {
    setSubmitted(false);
    if (isRight) {
      setShowCommentary(true);
    } else {
      setIsRight(false);
      setShowCommentary(false);
    }
  };

  return (
    <S.Wrap>
      <S.QuizAuthor>{author}</S.QuizAuthor>
      <S.QuizContent>
        <S.QuizTitle>{title}</S.QuizTitle>
        {!showCommentary &&
          (!submitted ? (
            <Answers
              answerlist={quizAnswers}
              answerClickHandler={isSubmitted}
            />
          ) : (
            <Result
              isRight={isRight}
              signed={signed}
              signedButtonStr="Read the commentary"
              signedButtonClickHandler={signedButtonClickHandler}
            />
          ))}
        {showCommentary && <S.QuizCommentary>{commentary}</S.QuizCommentary>}
      </S.QuizContent>
    </S.Wrap>
  );
};

QuizItem.propTypes = {
  signed: PropTypes.bool,
  quiz: PropTypes.shape({
    author: PropTypes.string,
    title: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.string),
    rightAnswer: PropTypes.string,
    commentary: PropTypes.string,
  }),
};

QuizItem.defaultProps = {
  signed: false,
  quiz: {
    author: '',
    title: '',
    answers: [],
    rightAnswer: '',
    commentary: '',
  },
};

export default QuizItem;
