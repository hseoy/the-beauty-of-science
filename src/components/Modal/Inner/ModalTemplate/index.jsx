import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const ModalTemplate = ({ children, title, button, checkHandler }) => {
  const buttonClickHandler = event => {
    if (checkHandler) {
      checkHandler(event);
    }
  };

  return (
    <>
      <S.Title>{title}</S.Title>
      <S.Body>{children}</S.Body>
      <S.Button onClick={buttonClickHandler}>{button}</S.Button>
    </>
  );
};

ModalTemplate.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  button: PropTypes.string,
  checkHandler: PropTypes.func,
};

ModalTemplate.defaultProps = {
  title: '',
  children: {},
  button: '',
  checkHandler: undefined,
};

export default ModalTemplate;
