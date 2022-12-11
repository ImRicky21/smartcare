/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaComment } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { getChildData } from '../../data/network-data';
import { developmentColorStats } from '../../utils/highlight-status';
import AppBar from '../components/app-bar';
import BackButton from '../components/back-button';
import ChildProfileCard from '../components/child-profile-card';

function DevelopmentDetailChildPage({ authorizeChildId }) {
  const { id } = useParams();
  const [development, setDevelopment] = useState('sedang-dimuat');
  const [feedbacks, setFeedbacks] = useState([]);
  const [stimulations, setStimulations] = useState('');
  let key = 0;

  function getKey() {
    key += 1;
    return key;
  }

  useEffect(() => {
    async function fetchChildData() {
      const response = await getChildData(id);
      if (!response.error) {
        const { data } = response;
        setDevelopment(data.healthStatus.development.result);
        setFeedbacks(data.healthStatus.development.feedback);
        setStimulations(data.healthStatus.development.stimulation);
      }
    }
    authorizeChildId(id);
    fetchChildData();
  }, []);

  return (
    <div className="main-content">
      <AppBar listActive="development-page" />
      <BackButton linkTo="/development" />
      <ChildProfileCard id={id} displayStatus="body-data" />
      <div className="survey-child-profile-section-wrapper card">
        <Link className="survey-child-profile-section" to={`/child/development/survey/${id}`}>
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
      {development === 'belum-dimuat' || development === '--' ? '' : (
        <>
          <div className="development-feedback card">
            <h3 className="development-feedback__heading">
              <b>Feedback</b>
            </h3>
            {feedbacks.map((feedback) => <div className="feedback-item" key={getKey()}>{feedback}</div>)}
          </div>
          {stimulations
            ? (
              <div className="development-stimulation card">
                <h3 className="development-stimulation__heading">
                  <b>Stimulasi</b>
                </h3>
                {
              stimulations.BICARA_DAN_BAHASA
                ? (
                  <>
                    <h4 className="stimulation-heading">Bicara dan Bahasa</h4>
                    {stimulations.BICARA_DAN_BAHASA.map((value) => <div key={getKey()} className="stimulation-item">{value}</div>)}
                  </>
                )
                : ''
            }
                {
              stimulations.GERAK_HALUS
                ? (
                  <>
                    <h4 className="stimulation-heading">Gerak Halus</h4>
                    {stimulations.GERAK_HALUS.map((value) => <div key={getKey()} className="stimulation-item">{value}</div>)}
                  </>
                )
                : ''
            }
                {
              stimulations.GERAK_KASAR
                ? (
                  <>
                    <h4 className="stimulation-heading">Gerak Kasar</h4>
                    {stimulations.GERAK_KASAR.map((value) => <div key={getKey()} className="stimulation-item">{value}</div>)}
                  </>
                )
                : ''
            }
                {
              stimulations.SOSIALISASI_DAN_KEMANDIRIAN
                ? (
                  <>
                    <h4 className="stimulation-heading">Sosialisasi dan Kemandirian</h4>
                    {stimulations.SOSIALISASI_DAN_KEMANDIRIAN.map((value) => <div key={getKey()} className="stimulation-item">{value}</div>)}
                  </>
                )
                : ''
            }
              </div>
            )
            : ''}
        </>
      )}
    </div>
  );
}

DevelopmentDetailChildPage.propTypes = {
  authorizeChildId: PropTypes.func.isRequired,
};

export default DevelopmentDetailChildPage;
