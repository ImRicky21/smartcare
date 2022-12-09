/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { FaComment } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { getChildData } from '../../data/network-data';
import { developmentColorStats } from '../../utils/highlight-status';
import AppBar from '../components/app-bar';
import BackButton from '../components/back-button';
import ChildProfileCard from '../components/child-profile-card';

function DevelopmentDetailChildPage() {
  const { id } = useParams();
  const [development, setDevelopment] = useState('belum-dimuat');

  useEffect(() => {
    async function fetchChildData() {
      const response = await getChildData(id);
      if (!response.error) {
        const { data } = response;
        setDevelopment(data.healthStatus.development.result);
      }
    }
    fetchChildData();
  }, []);

  return (
    <div className="main-content">
      <AppBar listActive="development-page" />
      <BackButton linkTo="/" />
      <ChildProfileCard id={id} displayStatus="body-data" />
      <div className="survey-child-profile-section-wrapper card">
        <Link className="survey-child-profile-section" to={`/child/growth/survey/${id}`}>
          <FaComment className="survey-child-profile-section__icon" />
          <p className="survey-child-profile-section__tag">Survey Profile Anak</p>
        </Link>
      </div>
      <div className="development-result card">
        <h3 className="development-result__heading">
          Perkembangan anak
          {' '}
          <b>sesuai dengan tahap perkembangannya</b>
        </h3>
        <div className={`development-result__status ${developmentColorStats[development]}`}>
          Status Perkembangan:
          {' '}
          {development}
        </div>
      </div>
      {development === 'belum-dimuat' ? '' : (
        <>
          <div className="development-feedback card">
            <h3 className="development-feedback__heading">
              <b>Feedback</b>
            </h3>
          </div>
          <div className="development-stimulation card">
            <h3 className="development-stimulation__heading">
              <b>Stimulasi</b>
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default DevelopmentDetailChildPage;
