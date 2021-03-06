import styled, { css } from 'styled-components';

const Wrap = styled.div`
  ${({ theme }) =>
    theme.colors.primaryColor &&
    css`
      background-color: ${theme.colors.primaryColor};
    `}

  font-family: 'TmonTium', 'TmonMonsori', sans-serif;
  text-align: center;
`;

const ContentWrap = styled.div`
  width: 80%;
  padding-top: 80px;
  margin: 0 auto;
`;

export { Wrap };
export { ContentWrap };

export default {
  Wrap,
  ContentWrap,
};
