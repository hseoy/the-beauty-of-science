import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const Wrap = styled.hgroup`
  display: block;
  position: relative;
  margin-bottom: 60px;
`;

const TitleLink = styled(Link)`
  ${({ theme }) =>
    theme.colors.accentColor &&
    css`
      color: ${theme.colors.accentColor};
    `}
  &:hover {
    text-decoration: none;
  }
`;

const MainTitle = styled.h1`
  font-size: 38px;
  letter-spacing: 20px;
  padding-left: 20px;
  margin-bottom: 5px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  letter-spacing: 1.25px;
  padding-left: 1.25px;
  padding-top: 30px;
`;

export { Wrap };
export { TitleLink };
export { MainTitle };
export { SubTitle };
export default { Wrap, TitleLink, MainTitle, SubTitle };
