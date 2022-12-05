/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FaChild,
  FaBrain,
  FaNewspaper,
  FaSyringe,
} from 'react-icons/fa';

function AppBar({ listActive }) {
  return (
    <nav className="app-bar nav">
      <div className="app-bar__wrapper">
        <ul className="app-bar__list-container bg-primary">
          <li className={`list-item ${listActive === 'growth-page' ? 'active' : ''}`}><FaChild /></li>
          <li className={`list-item ${listActive === 'development-page' ? 'active' : ''}`}><FaBrain /></li>
          <li className={`list-item ${listActive === 'articles-page' ? 'active' : ''}`}><FaNewspaper /></li>
          <li className={`list-item ${listActive === 'vaccines-page' ? 'active' : ''}`}><FaSyringe /></li>
        </ul>
      </div>
    </nav>
  );
}

AppBar.propTypes = {
  listActive: PropTypes.string.isRequired,
};

export default AppBar;
