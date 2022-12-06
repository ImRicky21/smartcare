/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function BackButton({ linkTo }) {
  return (
    <Link to={linkTo} className="back-button">
      <FaArrowLeft />
      <span>Kembali</span>
    </Link>
  );
}

BackButton.propTypes = {
  linkTo: PropTypes.string.isRequired,
};

export default BackButton;
