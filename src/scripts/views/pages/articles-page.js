/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import AppBar from '../components/app-bar';

function ArticlesPage() {
  return (
    <div className="main-content">
      <AppBar listActive="articles-page" />
      <h1>Page Article</h1>
    </div>
  );
}

export default ArticlesPage;
