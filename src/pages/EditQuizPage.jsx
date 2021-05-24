import React from 'react';
import PageTemplate from 'components/base/PageTemplate';
import QuizEditorContainer from 'container/write/QuizEditorContainer';

const EditQuizPage = () => {
  return (
    <PageTemplate hideHeader fullSizeInner contentPadding="60px 0">
      <QuizEditorContainer />
    </PageTemplate>
  );
};

export default EditQuizPage;
