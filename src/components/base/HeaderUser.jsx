import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderUser = ({ user }) => {
  return (
    <HeaderUserBlock>
      <div className="user-avatar">
        <img src={user.avatar} alt="thumbnail" />
      </div>
      <div className="user-name">{user.username}</div>
    </HeaderUserBlock>
  );
};

HeaderUser.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    userid: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};

HeaderUser.defaultProps = {
  user: null,
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
