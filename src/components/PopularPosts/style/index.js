import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  margin-bottom: 50px;
`;

const TitleWrap = styled.h2`
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-srif'};
  text-align: center;
  padding: 20px 0;
  position: relative;
  border-bottom: 3px dashed ${({ theme }) => theme.colors.accentColor || '#000'};
`;

const Title = styled.span`
  fotn-size: 25px;
  padding-bottom: 10px;
`;

const SubTitle = styled.span`
  font-size: 20px;
`;

const PostsWrap = styled.div`
  width: 100%;
  max-width: 1160px;
  height: 350px;
  overflow: hidden;
  padding: 30px 160px 0 160px;
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

export { Wrap };
export { TitleWrap };
export { Title };
export { SubTitle };
export { PostsWrap };
export { PrevButton };
export { NextButton };
export { DotsWrap };
export { Dot };
export default {
  Wrap,
  TitleWrap,
  Title,
  SubTitle,
  PostsWrap,
  PrevButton,
  NextButton,
  DotsWrap,
  Dot,
};
