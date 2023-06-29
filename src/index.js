import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App.js';
import { ContextProvider } from './contexts/ContextProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
