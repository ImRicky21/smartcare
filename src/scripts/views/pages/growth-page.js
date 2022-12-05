/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FaPlusCircle, FaExclamationCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import AppBar from '../components/app-bar';
import ChildProfileCard from './child-profile-card';
import { useNavigate } from 'react-router-dom';

function GrowthPage({ childs }) {
  const navigates = useNavigate();
  function onClickAddChildHandler() {
    navigates('/child/add');
  }
  return (
    <>
      <div className="main-content">
        <div className="add-child-profile-section card" onClick={onClickAddChildHandler}>
          <FaPlusCircle className="add-child-profile-section__icon" />
          <p className="add-child-profile-section__tag">Tambah Profile Anak</p>
        </div>
        {childs
          ? childs.map((child) => <ChildProfileCard id={child} key={child} />)
          : (
            <div className="no-childs-alert-section card">
              <FaExclamationCircle className="no-childs-alert-section__icon" />
              <p className="no-childs-alert-section__tag">
                Anda Belum Menambahkan Profile Anak
              </p>
            </div>
          )}
      </div>
      <AppBar listActive="growth-page" />
    </>
  );
}

GrowthPage.propTypes = {
  childs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GrowthPage;
