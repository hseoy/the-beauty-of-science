import React from 'react';
import { Route } from 'react-router-dom';
import { Home, About, ModalPage } from 'pages';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GoHomeLink from 'components/GoHomeLink';
import EditorTriggerButton from 'components/EditorTriggerButton';

const App = () => {
  const isSigned = false;
  return (
    <>
      <GoHomeLink />
      <Header />
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/modal" component={ModalPage} />
      <Footer
        author="Yunseo Hwang"
        homepage="https://github.com/hseoy/the-beauty-of-science"
      />
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
