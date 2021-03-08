import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const Button = ({ children, clickHandler }) => {
  const buttonClickHandler = event => {
    if (clickHandler) {
      clickHandler(event);
    }
  };
  return <S.Button onClick={buttonClickHandler}>{children}</S.Button>;
};

Button.propTypes = {
  children: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  children: '',
  clickHandler: undefined,
};

export default Button;
