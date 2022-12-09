/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FaChild,
  FaBrain,
  FaNewspaper,
  FaBabyCarriage,
} from 'react-icons/fa';

function AppBar({ listActive }) {
  return (
    <nav className="app-bar nav">
      <div className="app-bar__wrapper">
        <ul className="app-bar__list-container list-icon">
          <li className={`list-item ${listActive === 'childs-page' ? 'active' : ''}`}>
            <Link to="/">
              <FaBabyCarriage />
            </Link>
          </li>
          <li className={`list-item ${listActive === 'growth-page' ? 'active' : ''}`}>
            <Link to="/growth">
              <FaChild />
            </Link>
          </li>
          <li className={`list-item ${listActive === 'development-page' ? 'active' : ''}`}>
            <Link to="/development">
              <FaBrain />
            </Link>
          </li>
          <li className={`list-item ${listActive === 'articles-page' ? 'active' : ''}`}>
            <Link to="/articles">
              <FaNewspaper />
            </Link>
          </li>
        </ul>
        <ul className="app-bar__list-container list-detail">
          <li className={`list-item ${listActive === 'childs-page' ? 'active' : ''}`}>
            <Link to="/">
              Profile Anak
            </Link>
          </li>
          <li className={`list-item ${listActive === 'growth-page' ? 'active' : ''}`}>
            <Link to="/growth">
              Pertumbuhan
            </Link>
          </li>
          <li className={`list-item ${listActive === 'development-page' ? 'active' : ''}`}>
            <Link to="/development">
              Perkembangan
            </Link>
          </li>
          <li className={`list-item ${listActive === 'articles-page' ? 'active' : ''}`}>
            <Link to="/articles">
              Artikel
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

AppBar.propTypes = {
  listActive: PropTypes.string.isRequired,
};

export default AppBar;
