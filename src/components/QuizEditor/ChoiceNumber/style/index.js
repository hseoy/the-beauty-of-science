import styled, { css } from 'styled-components';

const NumberWrap = styled.div`
  width: 100%;
  text-align: center;
`;

const Number = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  border-radius: 50%;
  margin: 0 50px;
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  font-size: 15px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  }
  ${props =>
    props.checked &&
    css`
      background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
      color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
    `}
`;

export { NumberWrap, Number };
export default { NumberWrap, Number };
