import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProfileHeader from './ProfileHeader';

const ProfileTemplate = ({ user }) => {
  return (
    <ProfileTemplateBlock>
      <ProfileHeader user={user} />
    </ProfileTemplateBlock>
  );
};

ProfileTemplate.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
  }),
};

ProfileTemplate.defaultProps = {
  user: {
    id: 0,
    username: '',
    experience: 0,
  },
};

const ProfileTemplateBlock = styled.div`
  width: 100%;
  padding-top: 3.125rem;
`;

export default ProfileTemplate;
