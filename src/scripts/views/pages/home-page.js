/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function HomePage({ email }) {
  return (
    <h1>
      Hello
      {' '}
      {email}
    </h1>
  );
}

HomePage.propTypes = {
  email: PropTypes.string.isRequired,
};

export default HomePage;
