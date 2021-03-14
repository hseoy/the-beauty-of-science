import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const PodiumBarTop = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - ${props => props.height || '50%'});
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 5%;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-serif'};
  font-size: 2rem;
`;

export const PodiumBar = styled.div`
  width: 100%;
  height: ${props => props.height || '50%'};
  background-color: ${props =>
    props.theme.colors.primaryColor || props.bgColor || '#fff'};
  border: 3px solid
    ${props => props.theme.colors.accentColor || props.bdColor || '#000'};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.special || 'sans-serif'};
  font-size: 2rem;
`;

export const PodiumBarWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  height: 100%;
  position: relative;

  :first-child {
    ${PodiumBar}, ${PodiumBarTop} {
      font-size: 1.5rem;
    }
    ${PodiumBar} {
      border-right: none;
    }
  }
  :last-child {
    ${PodiumBar}, ${PodiumBarTop} {
      font-size: 1.3rem;
    }

    ${PodiumBar} {
      border-left: none;
    }
  }
`;
