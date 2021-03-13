import styled from 'styled-components';

const Slider = styled.div`
  width: 100%;
  height: ${props => props.height || '500'}px;
  overflow: hidden;
  padding: 0 40px;
  margin: 0 auto;
  position: relative;
`;

const PrevNextButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  padding: 16px;
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  font-weight: 28px;
  transition: 0.6s;
  border-radius: 0 3px 3px 0;
`;

const PrevButton = styled(PrevNextButton)`
  left: 0;
`;

const NextButton = styled(PrevNextButton)`
  right: 0;
  border-radius: 3px 0 0 3px;
`;

const DotsWrap = styled.div`
  text-align: center;
  padding: 30px;
`;

const Dot = styled.span`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;

  background-color: ${props => (props.active ? '#1e1e1e' : '#bbb')};
`;

export { Slider };
export { PrevButton };
export { NextButton };
export { DotsWrap };
export { Dot };
export default {
  Slider,
  PrevButton,
  NextButton,
  DotsWrap,
  Dot,
};
