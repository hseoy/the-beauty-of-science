import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const defaultBars = [
  { height: '65%', top: '', bottom: '1st' },
  { height: '45%', top: '', bottom: '2st' },
  { height: '25%', top: '', bottom: '3st' },
];

const Podium = ({ bars }) => {
  const podiumBars = [];

  for (let i = 0; i < 3; i += 1) {
    podiumBars[i] = { ...defaultBars[i], ...bars[i] };
  }

  return (
    <PodiumBlock>
      <PodiumBar $height={podiumBars[1].height}>
        <div className="bar-top">{podiumBars[1].top}</div>
        <div className="bar-bottom">{podiumBars[1].bottom}</div>
      </PodiumBar>

      <PodiumBar $height={podiumBars[0].height}>
        <div className="bar-top">{podiumBars[0].top}</div>
        <div className="bar-bottom">{podiumBars[0].bottom}</div>
      </PodiumBar>

      <PodiumBar $height={podiumBars[2].height}>
        <div className="bar-top">{podiumBars[2].top}</div>
        <div className="bar-bottom">{podiumBars[2].bottom}</div>
      </PodiumBar>
    </PodiumBlock>
  );
};

Podium.propTypes = {
  bars: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.string,
      top: PropTypes.string,
      bottom: PropTypes.string,
    }),
  ),
};

Podium.defaultProps = {
  bars: [...defaultBars],
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

export default Podium;
