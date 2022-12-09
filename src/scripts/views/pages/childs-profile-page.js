/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AppBar from '../components/app-bar';
import ChildCard from '../components/child-card';

function ChildsProfilePage({ childs, onDelete }) {
  let key = 0;
  function getKey() {
    key += 1;
    return key;
  }
  return (
    <div className="main-content">
      <AppBar listActive="childs-page" />
      <div className="add-child-profile-section card">
        <Link to="/child/add" className="add-child-profile-section__wrapper">
          <FaPlusCircle className="add-child-profile-section__icon" />
          <p className="add-child-profile-section__tag">Tambah Profile Anak</p>
        </Link>
      </div>
      {childs.length
        ? childs.map((child) => <ChildCard key={getKey()} onDelete={onDelete} childId={child} />)
        : (
          <div className="no-childs-alert-section card">
            <FaExclamationCircle className="no-childs-alert-section__icon" />
            <p className="no-childs-alert-section__tag">
              Anda Belum Menambahkan Profile Anak
            </p>
          </div>
        )}
    </div>
  );
}

ChildsProfilePage.propTypes = {
  onDelete: PropTypes.func.isRequired,
  childs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ChildsProfilePage;
