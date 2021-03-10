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
import PostEditor from 'components/PostEditor';
import QuizEditor from 'components/QuizEditor';

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
          <QuizEditor />
        </>
      )}
    </>
  );
};

export default App;
