/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand " href="#">
          <span className="navbar-brand__smart-tag text-tertiary fw-bold fs-3">Smart</span>
          <span
            className="navbar-brand__care-tag text-light fs-3"
          >
            Care
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item text-center mx-2">
              <a className="nav-link text-light active" href="#">Home</a>
            </li>
            <li className="nav-item text-center mx-2">
              <a className="nav-link text-light" href="#feature-section">Fitur</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
