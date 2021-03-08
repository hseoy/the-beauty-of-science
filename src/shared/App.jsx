import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, ModalPage, SignInPage, SignUpPage } from 'pages';
import GoHomeLink from 'components/GoHomeLink';
import EditorTriggerButton from 'components/EditorTriggerButton';

const App = () => {
  const isSigned = false;
  return (
    <>
      <GoHomeLink />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/modal" component={ModalPage} />
      <Route path="/signin" component={SignInPage} />
      <Route path="/signup" component={SignUpPage} />
      {isSigned && (
        <>
          <EditorTriggerButton hiddenTitle="Write it" left>
            Share the beauty
          </EditorTriggerButton>

          <EditorTriggerButton hiddenTitle="Make a quiz" right>
            Help others learn
          </EditorTriggerButton>
        </>
      )}
    </>
  );
};

export default App;
