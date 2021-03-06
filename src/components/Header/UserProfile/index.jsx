import React from 'react';
import PropTypes from 'prop-types';
import S from './style';

const UserProfile = ({ user }) => {
  const { profileImage, username, userid } = user;
  return (
    <S.Wrap>
      <S.ProfileLink to={`/users/${userid}/profile`}>
        <S.ProfileImage img={profileImage} />
        <S.ProfileUserName>{username}</S.ProfileUserName>
      </S.ProfileLink>
    </S.Wrap>
  );
};

UserProfile.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default UserProfile;
