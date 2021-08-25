import React from 'react';
import ReactDom from 'react-dom';

import GlobalStyle from './styles/global'

import App from './components/App';

ReactDom.render(  
  <>
   <GlobalStyle />
   <App />
  </>,
  document.getElementById('root'),
);
