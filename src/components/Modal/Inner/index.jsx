import React from 'react';
import PropTypes from 'prop-types';
import ModalTemplate from './ModalTemplate';
import S from './style';

const Inner = ({
  children,
  closable,
  closeHandler,
  useTemplate,
  title,
  button,
  checkHandler,
  bgColor,
  bdColor,
  color,
}) => {
  const close = e => {
    if (closeHandler) {
      closeHandler(e);
    }
  };
  return (
    <S.Inner tabIndex="0" color={color} bdColor={bdColor} bgColor={bgColor}>
      {closable && <S.CloseButton onClick={close}>&times;</S.CloseButton>}
      <S.Content>
        {useTemplate ? (
          <ModalTemplate
            title={title}
            button={button}
            checkHandler={checkHandler}
            isCloseButton
            primaryColor={bgColor}
            accentColor={color}
          >
            {children}
          </ModalTemplate>
        ) : (
          children
        )}
      </S.Content>
    </S.Inner>
  );
};

Inner.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  closeHandler: PropTypes.func,
  closable: PropTypes.bool,
  useTemplate: PropTypes.bool,
  title: PropTypes.string,
  button: PropTypes.string,
  checkHandler: PropTypes.func,
  bgColor: PropTypes.string,
  bdColor: PropTypes.string,
  color: PropTypes.string,
};

Inner.defaultProps = {
  closeHandler: undefined,
  closable: true,
  useTemplate: false,
  title: '',
  button: '',
  checkHandler: undefined,
  bgColor: '',
  bdColor: '',
  color: '',
};

export default Inner;
