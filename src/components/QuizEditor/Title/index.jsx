import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const Title = ({ children }) => {
  return (
    <S.Wrap>
      <S.Title>{children}</S.Title>
    </S.Wrap>
  );
};

Title.propTypes = {
  children: PropTypes.string,
};

Title.defaultProps = {
  children: '',
};

export default Title;
