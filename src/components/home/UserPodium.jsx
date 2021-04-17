import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Podium from 'components/home/Podium';
import Options from 'components/common/Options';
import HomeElement from './HomeElement';

const UserPodium = ({
  maintitle,
  subtitle,
  option,
  optionList,
  onChangeOption,
  users,
}) => {
  const bars = users.map(user => ({ top: user.title, bottom: user.name }));

  while (bars.length < 3) {
    bars.push({ top: '', bottom: '' });
  }

  return (
    <HomeElement maintitle={maintitle} subtitle={subtitle} width="50%">
      <UserPodiumBlock>
        {optionList && (
          <Options
            option={option}
            optionList={optionList}
            onChange={onChangeOption}
            borderRadius="5px"
            right
          />
        )}
        <div className="podium">
          <Podium bars={bars} />
        </div>
      </UserPodiumBlock>
    </HomeElement>
  );
};

UserPodium.propTypes = {
  maintitle: PropTypes.string,
  subtitle: PropTypes.string,
  option: PropTypes.string,
  optionList: PropTypes.arrayOf(PropTypes.string),
  onChangeOption: PropTypes.func,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

UserPodium.defaultProps = {
  maintitle: 'Top User',
  subtitle: 'The most active users',
  option: '',
  optionList: [],
  onChangeOption: null,
  users: [],
};

const UserPodiumBlock = styled.div`
  width: 100%;
  height: 100%;

  > .podium {
    height: 200px;
    width: 100%;
    position: relative;
  }
`;

export default UserPodium;
