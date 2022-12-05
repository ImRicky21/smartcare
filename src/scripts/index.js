import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './views/app';
import '../styles/style.scss';
// eslint-disable-next-line import/order, no-unused-vars
import * as bootstrap from 'bootstrap';

const root = createRoot(document.getElementById('root'));
root.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
