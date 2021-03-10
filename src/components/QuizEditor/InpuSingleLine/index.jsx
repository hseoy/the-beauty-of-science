import React from 'react';
import PropTypes from 'prop-types';
import S from './style';
import { InputWrap } from '../style';

const InputSingleLine = ({ valueChangeHandler, value, title }) => {
  const inputChangeHandler = event => {
    if (valueChangeHandler) {
      valueChangeHandler(event.target.value);
    }
  };

  return (
    <InputWrap inputTitle={title}>
      <S.Input value={value} onChange={inputChangeHandler} />
    </InputWrap>
  );
};

InputSingleLine.propTypes = {
  valueChangeHandler: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
};

InputSingleLine.defaultProps = {
  valueChangeHandler: undefined,
  value: '',
  title: '',
};

export default InputSingleLine;
