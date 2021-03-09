import styled from 'styled-components';

const Title = styled.h2`
  width: 100%;
  height: 40%;
  font-size: 2rem;
  padding-top: 0.67rem;
  padding-bottom: 0.67rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-all;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  color: ${props => props.color || props.theme.colors.accentColor || '#000'};
  border-bottom: 2px dotted
    ${props => props.bdColor || props.theme.colors.accentColor || '#000'};
`;

const Body = styled.p`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 2rem 0;
  color: ${props => props.color || props.theme.colors.accentColor || '#000'};
`;

const Button = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 15px;
  font-size: 20px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  color: ${props => props.color || props.theme.colors.primaryColor || '#fff'};
  background-color: ${props =>
    props.bgColor || props.theme.colors.accentColor || '#000'};
`;

export { Title };
export { Body };
export { Button };
export default { Title, Body, Button };
