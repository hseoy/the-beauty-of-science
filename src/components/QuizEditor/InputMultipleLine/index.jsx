import React from 'react';
import PropTypes from 'prop-types';
import S from './style';
import { InputWrap } from '../style';

const InputMultipleLine = ({ valueChangeHandler, value, title }) => {
  const inputChangeHandler = event => {
    if (valueChangeHandler) {
      valueChangeHandler(event.target.value);
    }
  };
  return (
    <InputWrap inputTitle={title}>
      <S.Input onChange={inputChangeHandler} value={value} />
    </InputWrap>
  );
};

InputMultipleLine.propTypes = {
  valueChangeHandler: PropTypes.func,
  value: PropTypes.string,
  title: PropTypes.string,
};

InputMultipleLine.defaultProps = {
  valueChangeHandler: null,
  value: '',
  title: '',
};

export default InputMultipleLine;
