import styled from 'styled-components';

const EditorWrap = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

const MdEditorWrap = styled.div`
  height: calc(100% - 206px);
`;

const SelectCategoryWrap = styled.div`
  height: 50px;
  width: 200px;
  position: relative;
  border-radius: 3px;
  display: inline-block;

  &::after {
    content: '▼';
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -9px;
    z-index: 1;
    text-align: center;
    width: 20px;
    height: 18px;
    pointer-events: none;
  }
`;

const SelectCategory = styled.select`
  cursor: pointer;
  appearance: none;
  width: 200px;
  height: 50px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  background-color: ${({ theme }) => theme.colors.primaryColor || '#fff'};
  color: ${({ theme }) => theme.colors.accentColor || '#000'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  text-align-last: center;
  position: relative;
`;

const TitleInputWrap = styled.div`
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  font-size: 28px;
  padding: 10px;

  &::before {
    content: 'Title : ';
    padding-right: 24px;
    float: left;
  }
`;

const TitleInput = styled.input`
  outline: none;
  border: none;
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  font-size: 28px;
  margin-left: 106.16px;
  display: block;
  width: calc(100% - 106.16px);
  border-bottom: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
`;

const UploadButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100px;
`;

const UploadButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor || '#000'};
  border: 3px solid ${({ theme }) => theme.colors.accentColor || '#000'};
  font-family: ${({ theme }) => theme.font.family.accent || 'sans-seif'};
  font-size: 20px;
  width: 200px;
  height: 50px;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor || '#000'};
    color: ${({ theme }) => theme.colors.primaryColor || '#000'};
  }
`;

export { EditorWrap };
export { MdEditorWrap };
export { SelectCategoryWrap };
export { SelectCategory };
export { TitleInputWrap };
export { TitleInput };
export { UploadButtonWrap };
export { UploadButton };

export default {
  EditorWrap,
  MdEditorWrap,
  SelectCategoryWrap,
  SelectCategory,
  TitleInputWrap,
  TitleInput,
  UploadButtonWrap,
  UploadButton,
};
