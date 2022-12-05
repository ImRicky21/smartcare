/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import AppBar from '../components/app-bar';

function GrowthPage({ userData }) {
  return (
    <>
      <div className="main-content">
        <div className="add-child-profile-section card">
          <FaPlusCircle className="add-child-profile-section__icon" />
          <p className="add-child-profile-section__tag">Tambah Profile Anak</p>
        </div>
      </div>
      <AppBar listActive="growth-page" />
    </>
  );
}

GrowthPage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object.isRequired,
};

export default GrowthPage;
