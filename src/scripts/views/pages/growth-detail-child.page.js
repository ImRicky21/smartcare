/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowCircleUp } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';
import { getChildData, getGrowthFeedback } from '../../data/network-data';
import { headlengthPerAgeColorStats, heightPerAgeColorStats, weightPerAgeColorStats } from '../../utils/highlight-status';
import AppBar from '../components/app-bar';
import BackButton from '../components/back-button';
import ChildProfileCard from '../components/child-profile-card';

function GrowthDetailChildPage({ authorizeChildId }) {
  const { id } = useParams();
  const [feedback, setFeedback] = useState('');
  const [weightPerAge, setWeightPerAge] = useState('sedang dimuat');
  const [heightPerAge, setHeightPerAge] = useState('sedang dimuat');
  const [headlengthPerAge, setHeadLengthPerAge] = useState('sedang dimuat');
  const [weightStatus, setWeightStatus] = useState('active');
  const [heightStatus, setHeightStatus] = useState('');
  const [headlengthStatus, setHeadlengthStatus] = useState('');
  const [navStatus, setNavStatus] = useState('weight');
  const [colorStats, setColorStats] = useState('');
  const [status, setStatus] = useState('');
  let key = 0;

  const indicator = {
    weight: 'Berat Badan',
    height: 'Tinggi Badan',
    headlength: 'Lingkar Kepala',
  };

  function resetStatusActive() {
    setWeightStatus('');
    setHeightStatus('');
    setHeadlengthStatus('');
  }

  function onClickHeigthNav() {
    resetStatusActive();
    setHeightStatus('active');
    setNavStatus('height');
  }

  function onClickWeigthNav() {
    resetStatusActive();
    setWeightStatus('active');
    setNavStatus('weight');
  }

  function onClickHeadlengthNav() {
    resetStatusActive();
    setHeadlengthStatus('active');
    setNavStatus('headlength');
  }

  useEffect(() => {
    async function fetchChildData() {
      const response = await getChildData(id);
      if (!response.error) {
        const { data } = response;
        setWeightPerAge(data.healthStatus.weightPerAge);
        setHeightPerAge(data.healthStatus.heightPerAge);
        setHeadLengthPerAge(data.healthStatus.headlengthPerAge);
        const growthData = await getGrowthFeedback({
          measurement: 'weight',
          status: data.healthStatus.weightPerAge,
        });
        setFeedback(growthData.data);
      }
    }
    authorizeChildId(id);
    fetchChildData();
  }, []);

  useEffect(() => {
    async function fecthGrowthFeedback() {
      const { data } = await getGrowthFeedback({
        measurement: navStatus,
        status: status[navStatus],
      });
      setFeedback(data);
    }

    fecthGrowthFeedback();
  }, [navStatus]);

  useEffect(() => {
    async function changeStats() {
      if (weightPerAge && heightPerAge && headlengthPerAge) {
        setStatus({
          weight: weightPerAge,
          height: heightPerAge,
          headlength: headlengthPerAge,
        });

        setColorStats({
          height: heightPerAgeColorStats[heightPerAge],
          weight: weightPerAgeColorStats[weightPerAge],
          headlength: headlengthPerAgeColorStats[headlengthPerAge],
        });
      }
    }

    changeStats();
  }, [weightPerAge, heightPerAge, headlengthPerAge]);

  return (
    <div className="main-content">
      <AppBar listActive="growth-page" />
      <BackButton linkTo="/growth" />
      <ChildProfileCard id={id} displayStatus="body-data" />
      <div className="update-child-profile-section-wrapper card">
        <Link className="update-child-profile-section" to={`/child/growth/update/${id}`}>
          <FaArrowCircleUp className="update-child-profile-section__icon" />
          <p className="update-child-profile-section__tag">Update Profile Anak</p>
        </Link>
      </div>
      <div className="growth-nav-bar">
        <button onClick={onClickWeigthNav} type="button" className={`growth-nav-bar__weight ${weightStatus}`}>Berat Badan</button>
        <button onClick={onClickHeigthNav} type="button" className={`growth-nav-bar__height ${heightStatus}`}>Tinggi Badan</button>
        <button onClick={onClickHeadlengthNav} type="button" className={`growth-nav-bar__headlength ${headlengthStatus}`}>Lingkar Kepala</button>
      </div>
      <div className="growth-result card">
        <p className="growth-result__indicator">Indikator</p>
        <h3 className="growth-result__heading">
          <b>{indicator[navStatus]}</b>
          {' '}
          per
          {' '}
          <b>Umur</b>
        </h3>
        <div className={`growth-result__status ${colorStats[navStatus]}`}>
          Status Gizi:
          {' '}
          {status[navStatus]}
        </div>
        <div className="growth-result__feedback">
          <b>Feedback:</b>
          {' '}
          <ul>
            {feedback ? feedback.map((dataFeedback) => {
              key += 1;
              return (<li key={key}>{dataFeedback}</li>);
            }) : ''}
          </ul>
        </div>
      </div>
    </div>
  );
}

GrowthDetailChildPage.propTypes = {
  authorizeChildId: PropTypes.func.isRequired,
};

export default GrowthDetailChildPage;
