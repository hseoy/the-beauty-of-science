import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Podium = ({
  height1st,
  height2st,
  height3st,
  barTop1st,
  barTop2st,
  barTop3st,
  barBottom1st,
  barBottom2st,
  barBottom3st,
}) => {
  return (
    <PodiumBlock>
      <PodiumBar $height={height2st}>
        <div className="bar-top">{barTop2st}</div>
        <div className="bar-bottom">{barBottom2st}</div>
      </PodiumBar>

      <PodiumBar $height={height1st}>
        <div className="bar-top">{barTop1st}</div>
        <div className="bar-bottom">{barBottom1st}</div>
      </PodiumBar>

      <PodiumBar $height={height3st}>
        <div className="bar-top">{barTop3st}</div>
        <div className="bar-bottom">{barBottom3st}</div>
      </PodiumBar>
    </PodiumBlock>
  );
};

Podium.propTypes = {
  height1st: PropTypes.string,
  height2st: PropTypes.string,
  height3st: PropTypes.string,
  barTop1st: PropTypes.string,
  barTop2st: PropTypes.string,
  barTop3st: PropTypes.string,
  barBottom1st: PropTypes.string,
  barBottom2st: PropTypes.string,
  barBottom3st: PropTypes.string,
};

Podium.defaultProps = {
  height1st: '65%',
  height2st: '45%',
  height3st: '25%',
  barTop1st: '',
  barTop2st: '',
  barTop3st: '',
  barBottom1st: '1st',
  barBottom2st: '2st',
  barBottom3st: '3st',
};

const PodiumBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

const PodiumBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  height: 100%;
  position: relative;

  > .bar-top {
    box-sizing: border-box;
    width: 100%;
    height: calc(100% - ${props => props.$height || '50%'});
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5%;
    font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};
    font-size: 2rem;
  }

  > .bar-bottom {
    width: 100%;
    height: ${props => props.$height || '50%'};
    background-color: ${props =>
      props.$bgColor || props.theme.colors.primaryColor || '#fff'};
    border: 3px solid
      ${props => props.$bdColor || props.theme.colors.accentColor || '#000'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme }) => theme.font.family.special || 'sans-serif'};
    font-size: 2rem;
  }

  :first-child {
    > .bar-bottom,
    > .bar-top {
      font-size: 1.5rem;
    }
    > .bar-bottom {
      border-right: none;
    }
  }

  :last-child {
    > .bar-bottom,
    > .bar-top {
      font-size: 1.3rem;
    }
    > .bar-bottom {
      border-left: none;
    }
  }
`;
