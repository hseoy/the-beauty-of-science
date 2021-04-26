import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalTemplate = ({
  children,
  title,
  button,
  checkHandler,
  primaryColor,
  accentColor,
}) => {
  const buttonClickHandler = event => {
    if (checkHandler) {
      checkHandler(event);
    }
  };

  return (
    <ModalTemplateBlock $primaryColor={primaryColor} $accentColor={accentColor}>
      <div className="title">{title}</div>
      <div className="body">{children}</div>
      <button
        className="check-button"
        type="button"
        onClick={buttonClickHandler}
      >
        {button}
      </button>
    </ModalTemplateBlock>
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

const ModalTemplateBlock = styled.div`
  width: 500px;
  > .title {
    width: 100%;
    height: 40%;
    font-size: 2rem;
    padding-top: 0.67rem;
    padding-bottom: 0.67rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
    color: ${props =>
      props.$accentColor || props.theme.colors.accentColor || '#000'};
    border-bottom: 2px dotted
      ${props => props.$accentColor || props.theme.colors.accentColor || '#000'};
  }

  > .body {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    padding: 2rem 0;
    color: ${props =>
      props.$accentColor || props.theme.colors.accentColor || '#000'};
  }

  > .check-button {
    width: 100%;
    height: 60px;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
    color: ${props =>
      props.$primaryColor || props.theme.colors.primaryColor || '#fff'};
    background-color: ${props =>
      props.$accentColor || props.theme.colors.accentColor || '#000'};
  }
`;

export default ModalTemplate;
