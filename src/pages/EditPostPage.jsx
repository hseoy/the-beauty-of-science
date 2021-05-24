import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import PostEditorContainer from 'container/write/PostEditorContainer';

const EditPostPage = () => {
  return (
    <PageTemplate hideHeader fullSizeInner contentPadding="60px 0">
      <PostEditorContainer />
    </PageTemplate>
  );
};

export default EditPostPage;
