import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Button = ({
  transition,
  fontSize,
  borderRadius,
  fullwidth,
  reverse,
  hover,
  padding,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      $transition={transition}
      $fontSize={fontSize}
      $borderRadius={borderRadius}
      $fullwidth={fullwidth}
      $reverse={reverse}
      $hover={hover}
      $padding={padding}
      $morepadding={typeof children === 'string'}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  transition: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  padding: PropTypes.string,
  fullwidth: PropTypes.bool,
  reverse: PropTypes.bool,
  hover: PropTypes.bool,
};

Button.defaultProps = {
  children: null,
  transition: '',
  fontSize: '',
  borderRadius: '',
  padding: '',
  fullwidth: false,
  reverse: false,
  hover: true,
};

const StyledButton = styled.button`
  display: ${props => (props.$fullwidth ? 'flex' : 'inline-flex')};
  width: ${props => (props.$fullwidth ? '100%' : 'auto')};
  align-items: center;
  justify-content: center;
  transition: ${props => props.$transition || '0.2s'};
  background-color: ${props =>
    props.$reverse
      ? props.theme.colors.accentColor || '#000'
      : props.theme.colors.primaryColor || '#fff'};
  color: ${props =>
    props.$reverse
      ? props.theme.colors.primaryColor || '#fff'
      : props.theme.colors.accentColor || '#000'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  border-radius: ${props => props.$borderRadius || '3px'};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  font-size: ${props => props.$fontSize || '1rem'};
  padding: ${props =>
    props.$padding
      ? props.$padding
      : `0.5rem ${props.$morepadding ? '1rem' : '0.4rem'}`};

  ${props =>
    props.$hover &&
    css`
      &:hover {
        text-decoration: none;
        background-color: ${props.$reverse
          ? props.theme.colors.primaryColor || '#fff'
          : props.theme.colors.accentColor || '#000'};
        color: ${props.$reverse
          ? props.theme.colors.accentColor || '#000'
          : props.theme.colors.primaryColor || '#fff'};
      }
    `}
  & + & {
    margin-left: 0.5rem;
  }
`;

export default Button;
