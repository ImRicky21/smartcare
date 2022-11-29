import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './views/app';
import '../styles/style.scss';
// eslint-disable-next-line import/order, no-unused-vars
import * as bootstrap from 'bootstrap';
// import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <App />,
);
