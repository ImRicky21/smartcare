/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import AppBar from '../components/app-bar';
import ChildProfileCard from '../components/child-profile-card';

function DetailChildPage() {
  const { id } = useParams();
  const [weightStatus, setWeightStatus] = useState('active');
  const [heightStatus, setHeightStatus] = useState('');
  const [headlengthStatus, setHeadlengthStatus] = useState('');

  return (
    <>
      <div className="main-content">
        <ChildProfileCard id={id} />
        <div className="update-child-profile-section card">
          <FaArrowCircleUp className="update-child-profile-section__icon" />
          <p className="update-child-profile-section__tag">Tambah Profile Anak</p>
        </div>
        <div className="growth-nav-bar">
          <button type="button" className={`growth-nav-bar__weight ${weightStatus}`}>Berat Badan</button>
          <button type="button" className={`growth-nav-bar__height ${heightStatus}`}>Tinggi Badan</button>
          <button type="button" className={`growth-nav-bar__headlength ${headlengthStatus}`}>Lingkar Kepala</button>
        </div>
        <div className="growth-result card">
          <p className="growth-result__indicator">Indikator</p>
          <h3 className="growth-result__heading">
            <b>Berat Badan</b>
            {' '}
            per
            {' '}
            <b>Umur</b>
          </h3>
          <div className="growth-result__status highlight-green">Status Gizi: Sehat</div>
          <p className="growth-result__feedback">
            <b>Feedback:</b>
            {' '}
            Gizi anak anda sangat sehat, tetap konsisten
          </p>
        </div>
      </div>
      <AppBar listActive="growth-page" />
    </>
  );
}

export default DetailChildPage;
