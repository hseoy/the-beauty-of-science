import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultAvatar from 'assets/images/default-avatar.png';

const HeaderUser = ({ user, avatar }) => {
  return (
    <HeaderUserBlock>
      <div className="user-avatar">
        <img src={avatar || defaultAvatar} alt="thumbnail" />
      </div>
      <div className="user-name">{user.username}</div>
    </HeaderUserBlock>
  );
};

HeaderUser.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object]),
  avatar: PropTypes.string,
};

HeaderUser.defaultProps = {
  user: null,
  avatar: '',
};

const HeaderUserBlock = styled.div`
  display: flex;
  .user-avatar {
    display: inline-flex;
    align-items: center;

    img {
      display: block;
      width: 1.875rem;
      height: 1.875rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .user-name {
    padding: 0 0.625rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
  }
`;

export default HeaderUser;
