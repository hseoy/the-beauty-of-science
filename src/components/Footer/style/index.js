import styled, { css } from 'styled-components';

const Wrap = styled.div`
  ${props =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `}
  width: 100%;
  height: 80px;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'TmonTium', 'TmonMonsori', sans-serif;
`;

const AuthorLink = styled.a`
  ${props =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${props =>
    props.bdColor &&
    css`
      border: 3px solid ${props.bdColor};
    `}
  margin: 0 2px;
  border-radius: 20px;
  padding: 2px 5px;
  transition: 0.15s;

  &:hover {
    text-decoration: none;

    ${props =>
      props.hoverBgColor &&
      css`
        background-color: ${props.hoverBgColor};
      `}
    ${props =>
      props.hoverColor &&
      css`
        color: ${props.hoverColor};
      `}
  }
`;

export { Wrap };
export { AuthorLink };
export default { Wrap, AuthorLink };
