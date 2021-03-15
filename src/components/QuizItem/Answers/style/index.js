import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const Answer = styled.button`
  cursor: pointer;
  display: inline-block;
  width: calc(50% - 5px);
  height: calc(50% - 5px);
  margin: 2.5px;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  border-radius: 20px;
  font-size: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  }
`;
