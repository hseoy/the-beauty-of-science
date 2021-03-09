import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import S from './style';

const ModalTemplate = ({
  children,
  title,
  button,
  checkHandler,
  primaryColor,
  accentColor,
}) => {
  const themeContext = useContext(ThemeContext);
  const themePrimaryColor = themeContext.colors.primaryColor;
  const themeAccentColor = themeContext.colors.accentColor;

  const buttonClickHandler = event => {
    if (checkHandler) {
      checkHandler(event);
    }
  };

  return (
    <>
      <S.Title
        color={accentColor || themeAccentColor}
        bdColor={accentColor || themeAccentColor}
      >
        {title}
      </S.Title>
      <S.Body color={accentColor || themeAccentColor}>{children}</S.Body>
      <S.Button
        onClick={buttonClickHandler}
        color={primaryColor || themePrimaryColor}
        bgColor={accentColor || themeAccentColor}
      >
        {button}
      </S.Button>
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
  primaryColor: PropTypes.string,
  accentColor: PropTypes.string,
};

ModalTemplate.defaultProps = {
  title: '',
  children: {},
  button: '',
  checkHandler: undefined,
  primaryColor: '',
  accentColor: '',
};

export default ModalTemplate;
