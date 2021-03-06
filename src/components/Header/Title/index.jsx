import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const Title = ({ maintitle, subtitle }) => {
  return (
    <S.Wrap>
      <S.TitleLink to="/">
        <S.MainTitle>{maintitle}</S.MainTitle>
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.TitleLink>
    </S.Wrap>
  );
};

Title.propTypes = {
  maintitle: PropTypes.string,
  subtitle: PropTypes.string,
};

Title.defaultProps = {
  maintitle: '',
  subtitle: '',
};

export default Title;
