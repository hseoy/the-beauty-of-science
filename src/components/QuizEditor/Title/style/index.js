import styled from 'styled-components';

const Wrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  width: 200px;
  height: 50px;
  margin: 0 auto;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  border-radius: 3px;
`;

export default { Wrap, Title };
