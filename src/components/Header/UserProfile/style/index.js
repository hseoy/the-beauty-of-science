import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrap = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px 20px 10px 10px;
`;

const ProfileLink = styled(Link)`
  display: flex;
  transition: 0.2s;
  font-family: 'TmonTium', 'TmonMonsori', sans-serif;

  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      color: ${theme.colors.accentColor};
      border: 3px solid ${theme.colors.accentColor};
    `}
  ${({ theme }) =>
    theme.colors.primaryColor &&
    css`
      background-color: ${theme.colors.primaryColor};
    `}

  &:hover {
    text-decoration: none;
    ${({ theme }) =>
      theme.colors.primaryColor &&
      css`
        color: ${theme.colors.primaryColor};
      `}
    ${({ theme }) =>
      theme.colors.accentColor &&
      css`
        background-color: ${theme.colors.accentColor};
      `}
  }
`;

const ProfileImage = styled.div`
  margin-right: auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 5px;
  overflow: hidden;
  ${props =>
    props.img &&
    css`
      background-image: url(${props.img});
      background-size: cover;
    `}
`;

const ProfileUserName = styled.div`
  padding: 0 10px;
  height: 40px;
  font-size: 20px;
  display: flex;
  align-items: center;
`;

export { Wrap };
export { ProfileLink };
export { ProfileImage };
export { ProfileUserName };
export default { Wrap, ProfileLink, ProfileImage, ProfileUserName };
