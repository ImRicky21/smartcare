/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import AppBar from '../components/app-bar';
import ChildProfileCard from '../components/child-profile-card';

function GrowthPage({ childs }) {
  return (
    <div className="main-content">
      <AppBar listActive="growth-page" />
      <div className="child-profile-section">
        {childs.length
          ? childs.map((child) => <ChildProfileCard id={child} key={child} displayStatus="growth-status" />)
          : (
            <div className="no-childs-alert-section card">
              <FaExclamationCircle className="no-childs-alert-section__icon" />
              <p className="no-childs-alert-section__tag">
                Anda Belum Menambahkan Profile Anak
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

GrowthPage.propTypes = {
  childs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GrowthPage;
