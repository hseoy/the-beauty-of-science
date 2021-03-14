import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Podium = ({
  height1st,
  height2st,
  height3st,
  bartop1st,
  bartop2st,
  bartop3st,
  bar1st,
  bar2st,
  bar3st,
}) => {
  return (
    <S.Wrap>
      <S.PodiumBarWrap>
        <S.PodiumBarTop height={height2st}>{bartop2st}</S.PodiumBarTop>
        <S.PodiumBar height={height2st}>{bar2st}</S.PodiumBar>
      </S.PodiumBarWrap>

      <S.PodiumBarWrap>
        <S.PodiumBarTop height={height1st}>{bartop1st}</S.PodiumBarTop>
        <S.PodiumBar height={height1st}>{bar1st}</S.PodiumBar>
      </S.PodiumBarWrap>

      <S.PodiumBarWrap>
        <S.PodiumBarTop height={height3st}>{bartop3st}</S.PodiumBarTop>
        <S.PodiumBar height={height3st}>{bar3st}</S.PodiumBar>
      </S.PodiumBarWrap>
    </S.Wrap>
  );
};

Podium.propTypes = {
  height1st: PropTypes.string,
  height2st: PropTypes.string,
  height3st: PropTypes.string,
  bartop1st: PropTypes.string,
  bartop2st: PropTypes.string,
  bartop3st: PropTypes.string,
  bar1st: PropTypes.string,
  bar2st: PropTypes.string,
  bar3st: PropTypes.string,
};

Podium.defaultProps = {
  height1st: '65%',
  height2st: '45%',
  height3st: '25%',
  bartop1st: '',
  bartop2st: '',
  bartop3st: '',
  bar1st: '1st',
  bar2st: '2st',
  bar3st: '3st',
};

export default Podium;
