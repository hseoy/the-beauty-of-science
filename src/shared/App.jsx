import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  About,
  ModalPage,
  SignInPage,
  SignUpPage,
  MdEditorPage,
} from 'pages';
import GoHomeLink from 'components/GoHomeLink';
import EditorTriggerButton from 'components/EditorTriggerButton';
import PostEditor from 'components/PostEditor';

const App = () => {
  const isSigned = true;
  return (
    <>
      <GoHomeLink />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/modal" component={ModalPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/mdeditor" component={MdEditorPage} />
      {isSigned && (
        <>
          <PostEditor />

          <EditorTriggerButton hiddenTitle="Make a quiz" right>
            Help others learn
          </EditorTriggerButton>
        </>
      )}
    </>
  );
};

export default App;
