import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const UserCard = ({ user }) => {
  const { t } = useTranslation();
  return (
    <UserCardBlock>
      <div className="user-level">
        {`${t('common.level')}${parseInt(user.experience / 100, 10) + 1}:${
          user.experience
        }`}
      </div>
      <div className="user-profile">
        <div className="user-avatar">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="user avatar"
          />
        </div>
        <div className="user-name">{`${user.username}@${user.id}`}</div>
      </div>
    </UserCardBlock>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
  }),
};

UserCard.defaultProps = {
  user: {
    id: 0,
    username: '',
    experience: 0,
  },
};

const UserCardBlock = styled.div`
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};

  > .user-level {
    font-size: 1.25rem;
    font-family: ${({ theme }) => theme.font.family.special || 'sans-serif'};
  }

  > .user-profile {
    display: flex;
    padding: 10px 0;

    > .user-avatar {
      width: 3.75rem;
      height: 100%;

      > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
      }
    }

    > .user-name {
      display: flex;
      align-items: center;
      font-size: 2rem;
      padding: 0 1rem;
    }
  }
`;

export default UserCard;
