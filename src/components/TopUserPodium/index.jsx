import React from 'react';
import HomeElement from 'components/HomeElement';
import Podium from 'components/Podium';
import S from './style';

const TopUserPodium = () => {
  return (
    <HomeElement title="Top User" subtitle="The most active users" width="50%">
      <S.PodiumWrap>
        <Podium bartop1st="user1" bartop2st="user2" bartop3st="user3" />
      </S.PodiumWrap>
    </HomeElement>
  );
};

export default TopUserPodium;
