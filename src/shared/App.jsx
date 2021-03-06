import React from 'react';
import { Route } from 'react-router-dom';
import About from 'pages/About';
import Home from 'pages/Home';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GoHomeLink from 'components/GoHomeLink';
import EditorTriggerButton from 'components/EditorTriggerButton';

const App = () => {
  return (
    <>
      <GoHomeLink />
      <Header />
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Footer
        author="Yunseo Hwang"
        homepage="https://github.com/hseoy/the-beauty-of-science"
      />

      <EditorTriggerButton hiddenTitle="Write it" left>
        Share the beauty
      </EditorTriggerButton>

      <EditorTriggerButton hiddenTitle="Make a quiz" right>
        Help others learn
      </EditorTriggerButton>
    </>
  );
};

export default App;
