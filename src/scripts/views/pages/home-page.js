/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function HomePage({ username }) {
  return (
    <h1>
      Hello
      {' '}
      {username}
    </h1>
  );
}

HomePage.propTypes = {
  username: PropTypes.string.isRequired,
};

export default HomePage;
