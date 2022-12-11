/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function LoadingPage() {
  return (
    <main>
      <div className="loading-page">
        <div className="lds-facebook">
          <div />
          <div />
          <div />
        </div>
        <h1>Loading...</h1>
      </div>
    </main>
  );
}

export default LoadingPage;
