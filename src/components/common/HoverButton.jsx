import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const HoverButton = ({ children, onClick, hiddenTitle, ...rest }) => {
  return (
    <StyledButton onClick={onClick} $hiddenTitle={hiddenTitle} {...rest}>
      <div className="inner">{children}</div>
    </StyledButton>
  );
};

HoverButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  hiddenTitle: PropTypes.string,
};

HoverButton.defaultProps = {
  hiddenTitle: '',
  onClick: null,
};

const StyledButton = styled.button`
  font-size: 1.2rem;
  perspective: 400px;
  background-color: transparent;
  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.3)));

  &:hover > .inner {
    &:after {
      background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    }
    transform: translate3d(0px, 0px, -30px) rotateX(90deg);
  }

  > .inner {
    position: relative;
    transition: 0.3s ease-in-out all;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
    color: ${({ theme }) => theme.colors.accentColor || '#000'};
    border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

    ${props =>
      props.$hiddenTitle &&
      css`
        &:after {
          content: '${props.$hiddenTitle}';
          position: absolute;
          left: 0;
          top: 0;
          transition: 0.3s ease-in-out all;
          transform-origin: 50% 0;
          transform: translate3d(0px, 85%, 0px) rotateX(-90deg);
          width: 100%;
          color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
          border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
          background-color: ${({ theme }) =>
            theme.colors.accentColor || '#000'};
        }
      `}
  }
`;

export default HoverButton;
