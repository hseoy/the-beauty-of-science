import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from 'polished';

const AuthInput = ({
  title,
  type,
  name,
  placeholder,
  autoComplete,
  onChange,
}) => {
  const onChangeHandler = e => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <AuthInputBlock>
      <h3>{title}</h3>
      <input
        title={placeholder}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChangeHandler}
      />
    </AuthInputBlock>
  );
};

AuthInput.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func,
};

AuthInput.defaultProps = {
  title: '',
  type: 'text',
  name: '',
  placeholder: '',
  autoComplete: 'off',
  onChange: null,
};

const AuthInputBlock = styled.div`
  width: 100%;
  height: ${props => props.$height || '3.125rem'};
  margin: 1.875rem auto;
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.whiteColor || '#fff'};

  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }

  > h3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 7.5rem;
    margin: 0 auto 0 1.25rem;
    font-size: 1.25rem;
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};

    &::after {
      content: ' :';
    }
  }

  > input {
    margin-right: 1.25rem;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 1.125rem;
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};

    &::placeholder {
      color: ${({ theme }) => lighten(0.8, theme.colors.accentColor || '#000')};
    }

    &:focus::placeholder {
      color: transparent;
    }
  }
`;

export default AuthInput;
