import React from 'react';
import PropTypes from 'prop-types';
import S from './style';
import { InputWrap } from '../style';

const ChoiceNumber = ({ title, count, valueChangeHandler, value }) => {
  const choiceHandler = num => () => {
    if (valueChangeHandler) {
      valueChangeHandler(num);
    }
  };
  const numbers = [];
  for (let i = 0; i < count; i += 1) {
    numbers.push(
      <S.Number key={i} onClick={choiceHandler(i)} checked={value === i}>
        {i + 1}
      </S.Number>,
    );
  }
  return (
    <InputWrap inputTitle={title}>
      <S.NumberWrap>{numbers}</S.NumberWrap>
    </InputWrap>
  );
};

ChoiceNumber.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  valueChangeHandler: PropTypes.func,
  value: PropTypes.number,
};

ChoiceNumber.defaultProps = {
  title: '',
  count: 0,
  valueChangeHandler: null,
  value: 0,
};

export default ChoiceNumber;
