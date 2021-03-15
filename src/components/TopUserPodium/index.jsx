import React, { useState } from 'react';
import HomeElement from 'components/HomeElement';
import Podium from 'components/Podium';
import Options from './Options';
import S from './style';

const TopUserPodium = () => {
  const [option, setOption] = useState('LEVEL');
  const optionList = ['LEVEL', 'POST', 'QUIZ'];
  return (
    <HomeElement title="Top User" subtitle="The most active users" width="50%">
      <Options
        option={option}
        optionList={optionList}
        valueChangeHandler={setOption}
      />
      <S.PodiumWrap>
        <Podium bartop1st="user1" bartop2st="user2" bartop3st="user3" />
      </S.PodiumWrap>
    </HomeElement>
  );
};

export default TopUserPodium;
