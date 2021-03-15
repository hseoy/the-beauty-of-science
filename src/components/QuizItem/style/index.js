import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 236px;
  text-align: center;
  position: relative;
`;

export const QuizAuthor = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
`;

export const QuizTitle = styled.h3`
  padding: 10px 0;
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  border-radius: 10px;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
`;

export const QuizContent = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const QuizCommentary = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.font.family.base || 'sans-seif'};
`;
