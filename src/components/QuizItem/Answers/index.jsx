import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Answers = ({ answerlist, answerClickHandler }) => {
  const answerButtonClickHandler = num => () => {
    if (answerClickHandler) {
      answerClickHandler(num);
    }
  };

  return (
    <S.Wrap>
      <S.Answer onClick={answerButtonClickHandler(0)}>{answerlist[0]}</S.Answer>
      <S.Answer onClick={answerButtonClickHandler(1)}>{answerlist[1]}</S.Answer>
      <S.Answer onClick={answerButtonClickHandler(2)}>{answerlist[2]}</S.Answer>
      <S.Answer onClick={answerButtonClickHandler(3)}>{answerlist[3]}</S.Answer>
    </S.Wrap>
  );
};

Answers.propTypes = {
  answerlist: PropTypes.arrayOf(PropTypes.string),
  answerClickHandler: PropTypes.func,
};

Answers.defaultProps = {
  answerlist: [],
  answerClickHandler: null,
};

export default Answers;
