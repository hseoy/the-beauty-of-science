import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const HomeElement = ({ children, width, title, subtitle }) => {
  return (
    <S.Wrap width={width}>
      <S.TitleWrap>
        <S.Title>{title}</S.Title>
        {subtitle && <span>|</span>}
        <S.SubTitle>{subtitle}</S.SubTitle>
      </S.TitleWrap>
      <S.ContentWrap>{children}</S.ContentWrap>
    </S.Wrap>
  );
};

HomeElement.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  width: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

HomeElement.defaultProps = {
  children: null,
  width: '100%',
  title: '',
  subtitle: '',
};

export default HomeElement;
