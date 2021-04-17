import React from 'react';
import useOptions from 'lib/hooks/useOptions';
import UserPodium from 'components/home/UserPodium';

const UserPodiumContainer = () => {
  const optionList = ['LEVEL', 'POST', 'QUIZ'];
  const [option, changeOption] = useOptions(optionList);

  // @TODO Get a list of users based on options
  const users = [];

  return (
    <UserPodium
      option={option}
      optionList={optionList}
      onChangeOption={changeOption}
      users={users}
    />
  );
};

export default UserPodiumContainer;
