import React, { useEffect } from 'react';
import useOptions from 'lib/hooks/useOptions';
import UserPodium from 'components/home/UserPodium';
import { useTranslation } from 'react-i18next';

const UserPodiumContainer = () => {
  const { t, i18n } = useTranslation();
  const optionList = [
    t('common.level').toUpperCase(),
    t('common.post').toUpperCase(),
    t('common.quiz').toUpperCase(),
  ];
  const [option, changeOption] = useOptions(optionList, optionList[0]);
  useEffect(() => {
    changeOption(optionList[0]);
  }, [i18n.language]);

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
