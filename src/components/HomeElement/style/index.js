import styled from 'styled-components';

const Wrap = styled.div`
  position: relative;
  margin: 0 10px;
  width: ${props => props.width || '100%'};
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

const ContentWrap = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 30px 0px;
`;

export default { Wrap, TitleWrap, Title, SubTitle, ContentWrap };
