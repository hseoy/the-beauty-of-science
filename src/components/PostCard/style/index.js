import styled from 'styled-components';

const Wrap = styled.div`
  display: inline-block;
  width: 250px;
  padding: 15px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  overflow: hidden;
`;

const ThumbnailWrap = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
`;

const ThumbnailImage = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: url(${props => props.bgImage}) no-repeat center center/cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
`;

const InfoTitle = styled.h3`
  word-break: break-all;
  padding: 0 20px;
  text-align: center;
`;

const Author = styled.div`
  padding-top: 10px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  width: 100%;
  padding: 3px 0;
  text-align: center;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
`;

const AuthorLevel = styled.span`
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  font-family: 'BlackOpsOneR',
    ${({ theme }) => theme.font.family.base || 'sans-seif'};
`;

export { Wrap };
export { ThumbnailWrap };
export { ThumbnailImage };
export { Info };
export { InfoTitle };
export { Author };
export { AuthorName };
export { AuthorLevel };
export default {
  Wrap,
  ThumbnailWrap,
  ThumbnailImage,
  Info,
  InfoTitle,
  Author,
  AuthorName,
  AuthorLevel,
};
