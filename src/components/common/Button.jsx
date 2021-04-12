import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({ transition, children, ...rest }) => {
  return (
    <StyledButton
      $transition={transition}
      {...rest}
      $morepadding={typeof children === 'string'}
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
};

Button.defaultProps = {
  children: null,
  transition: '0s',
};

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: ${props => props.$transition || '0.2s'};
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  border-radius: 3px;
  padding: 0.5rem ${props => (props.$morepadding ? '1rem' : '0.4rem')};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  }

  & + & {
    margin-left: 0.5rem;
  }
`;

export default Button;
