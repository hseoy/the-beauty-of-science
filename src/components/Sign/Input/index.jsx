import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const Input = ({ title, type, name, placeholder, autoComplete, onChange }) => {
  const onChangeHandler = event => {
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <S.InputBox>
      <S.InputTitle>{title}</S.InputTitle>
      <S.Input
        title={placeholder}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChangeHandler}
      />
    </S.InputBox>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  title: '',
  type: 'text',
  name: '',
  placeholder: '',
  autoComplete: 'off',
  onChange: null,
};

export default Input;
