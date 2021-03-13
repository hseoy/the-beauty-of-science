import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const Input = ({
  title,
  type,
  placeholder,
  autocomplete,
  valueChangeHandler,
}) => {
  const inputChangeHandler = event => {
    const { value } = event.target;
    if (valueChangeHandler) {
      valueChangeHandler(value);
    }
  };
  return (
    <S.InputBox>
      <S.InputTitle>{title}</S.InputTitle>
      <S.Input
        title={placeholder}
        type={type}
        placeholder={placeholder}
        autocomplete={autocomplete}
        onChange={inputChangeHandler}
      />
    </S.InputBox>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autocomplete: PropTypes.string,
  valueChangeHandler: PropTypes.func,
};

Input.defaultProps = {
  title: '',
  type: 'text',
  placeholder: '',
  autocomplete: 'on',
  valueChangeHandler: null,
};

export default Input;
