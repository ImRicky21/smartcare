/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

function TopBar({ username, signOutHandler }) {
  return (
    <div className="top-bar">
      <div className="top-bar__family-name bg-primary text-primary-light">
        <span>{username}</span>
        <span>family</span>
      </div>
      <button type="button" className="top-bar__button-sign-out btn btn-primary" id="btn-sign-out" onClick={(event) => signOutHandler(event)}>
        <FaSignOutAlt />
      </button>
    </div>
  );
}

TopBar.propTypes = {
  username: PropTypes.string.isRequired,
  signOutHandler: PropTypes.func.isRequired,
};

export default TopBar;
