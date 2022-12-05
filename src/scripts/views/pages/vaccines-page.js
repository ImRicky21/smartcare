/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import AppBar from '../components/app-bar';

function VaccinesPage() {
  return (
    <>
      <div className="main-content">
        <h1>Page Vaksin</h1>
      </div>
      <AppBar listActive="vaccines-page" />
    </>
  );
}

export default VaccinesPage;
