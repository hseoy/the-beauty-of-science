import styled, { css } from 'styled-components';

const EditorWrap = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

const QuizContentInputWrap = styled.div`
  padding: 0 40px;
`;

const InputWrap = styled.div`
  font-size: 20px;
  padding: 5px;
  margin: 10px 0;
  display: flex;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};

  &::before {
    content: '${props => props.inputTitle}:';
    width: 200px;
  }
`;

const QuizUploadButtonWrap = styled.div`
  margin-top: auto;
  height: 100px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuizUploadButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  font-size: 20px;
  width: 200px;
  height: 50px;
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

export { EditorWrap };
export { QuizContentInputWrap };
export { InputWrap };
export { QuizUploadButtonWrap };
export { QuizUploadButton };

export default {
  EditorWrap,
  QuizContentInputWrap,
  InputWrap,
  QuizUploadButtonWrap,
  QuizUploadButton,
};
