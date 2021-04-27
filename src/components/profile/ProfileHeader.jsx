import React from 'react';
import styled from 'styled-components';
import LinkButton from 'components/common/LinkButton';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import UserCard from './UserCard';

const ProfileHeader = () => {
  const { t } = useTranslation();

  const { user, avatar } = useSelector(state => ({
    user: state.user.user,
    avatar: state.user.avatar,
  }));

  return (
    <ProfileHeaderBlock>
      <UserCard user={user} avatar={avatar} />
      <div className="links">
        <LinkButton to="#">{t('common.posts')}</LinkButton>
        <LinkButton to="#">{t('common.quizzes')}</LinkButton>
        <LinkButton to="#">{t('common.settings')}</LinkButton>
      </div>
    </ProfileHeaderBlock>
  );
};

const ProfileHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 30px;
  border-bottom: 3px dashed ${({ theme }) => theme.colors.accentColor || '#000'};

  > .links {
    display: flex;
    align-items: center;
    padding-top: 2.1875rem;
    padding-bottom: 0.625rem;
  }
`;

export default ProfileHeader;
