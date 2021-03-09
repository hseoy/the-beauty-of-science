import React, { useState } from 'react';
import Modal from 'components/Modal';
import MdEditor from 'components/MdEditor';
import EditorTriggerButton from 'components/EditorTriggerButton';
import * as constants from 'myconstants';
import S from './style';

const PostEditor = () => {
  const initPostContent = "# Hello 'The Beauty of Science'";
  const [editorVisible, setEditorVisible] = useState(false);
  const [category, setCategory] = useState(constants.CATEGORIES[0].title);
  const [postTitle, setPostTitle] = useState(initPostContent);
  const [postContent, setPostContent] = useState(initPostContent);

  const onCategorySelect = event => {
    setCategory(event.target.value);
  };

  const onChangePostTitle = event => {
    setPostTitle(event.target.value);
  };

  const onSubmitPost = () => {
    console.log(postTitle, postContent, category);
  };

  const openEditor = () => {
    setEditorVisible(true);
  };
  const closeEditor = () => {
    setPostTitle(initPostContent);
    setPostContent(initPostContent);
    setEditorVisible(false);
  };

  return (
    <>
      <EditorTriggerButton
        onClickHandler={openEditor}
        hiddenTitle="Write it"
        left
      >
        Share the beauty
      </EditorTriggerButton>

      <Modal
        visible={editorVisible}
        closable
        closeHandler={closeEditor}
        bgColor="#fff"
      >
        <S.EditorWrap>
          <S.SelectCategoryWrap>
            <S.SelectCategory onChange={onCategorySelect}>
              {constants.CATEGORIES.map(categoryItem => (
                <option key={categoryItem.id}>{categoryItem.title}</option>
              ))}
            </S.SelectCategory>
          </S.SelectCategoryWrap>
          <S.TitleInputWrap>
            <S.TitleInput value={postTitle} onChange={onChangePostTitle} />
          </S.TitleInputWrap>

          <S.MdEditorWrap>
            <MdEditor
              mdText={postContent}
              valueChangeHandler={setPostContent}
            />
          </S.MdEditorWrap>

          <S.UploadButtonWrap>
            <S.UploadButton onClick={onSubmitPost}>
              {`Submit - ${category}`}
            </S.UploadButton>
          </S.UploadButtonWrap>
        </S.EditorWrap>
      </Modal>
    </>
  );
};

export default PostEditor;
