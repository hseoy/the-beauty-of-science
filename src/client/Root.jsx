import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from 'shared/App';
import themes from 'lib/styles/themes';
import GlobalStyle from 'GlobalStyle';
import rootReducer from 'modules';

const store = createStore(rootReducer, composeWithDevTools());

const Root = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
