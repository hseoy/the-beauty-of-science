import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LinkButton from 'components/common/LinkButton';
import UserCard from './UserCard';

const ProfileHeader = ({ user }) => {
  return (
    <ProfileHeaderBlock>
      <UserCard user={user} />
      <div className="links">
        <LinkButton to="#">Posts</LinkButton>
        <LinkButton to="#">Quizzes</LinkButton>
        <LinkButton to="#">Settings</LinkButton>
      </div>
    </ProfileHeaderBlock>
  );
};

ProfileHeader.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
  }),
};

ProfileHeader.defaultProps = {
  user: {
    id: 0,
    username: '',
    experience: 0,
  },
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
