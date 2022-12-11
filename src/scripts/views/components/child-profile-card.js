/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getChildData } from '../../data/network-data';
import {
  weightPerAgeColorStats,
  heightPerAgeColorStats,
  headlengthPerAgeColorStats,
  developmentColorStats,
} from '../../utils/highlight-status';

function ChildProfileCard({ id, displayStatus }) {
  const navigates = useNavigate();
  const [intialize, setInitialize] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [development, setDevelopment] = useState('sedang dimuat');
  const [weightPerAge, setWeightPerAge] = useState('---');
  const [heightPerAge, setHeightPerAge] = useState('---');
  const [headlengthPerAge, setHeadLengthPerAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [headlength, setHeadLength] = useState('');

  const navigateTo = {
    'growth-status': 'growth',
    'development-status': 'development',
  };

  function onClickCardHandler(event) {
    event.preventDefault();
    if (displayStatus !== 'body-data') {
      navigates(`/child/${navigateTo[displayStatus]}/${id}`);
    }
  }

  const statusElement = {
    'development-status': (
      <>
        <div className="child-profile-card__data">
          <div className="data-item">
            berat:
            {' '}
            <b>
              {weight}
              kg
            </b>
          </div>
          <div className="data-item">
            tinggi:
            {' '}
            <b>
              {height}
              cm
            </b>
          </div>
          <div className="data-item">
            lingkar kepala:
            {' '}
            <b>
              {headlength}
              cm
            </b>
          </div>
        </div>
        <div>
          <div className={`child-profile-card__development-status ${developmentColorStats[development]}`}>
            Status Perkembangan:
            {' '}
            <b>{development}</b>
          </div>
        </div>
      </>
    ),
    'growth-status': (
      <>
        <div className="child-profile-card__data">
          <div className="data-item">
            berat:
            {' '}
            <b>
              {weight}
              kg
            </b>
          </div>
          <div className="data-item">
            tinggi:
            {' '}
            <b>
              {height}
              cm
            </b>
          </div>
          <div className="data-item">
            lingkar kepala:
            {' '}
            <b>
              {headlength}
              cm
            </b>
          </div>
        </div>
        <div className="child-profile-card__stats">
          <div className={`child-weight-status ${weightPerAgeColorStats[weightPerAge]}`}>
            <b>{weightPerAge}</b>
          </div>
          <div className={`child-height-status ${heightPerAgeColorStats[heightPerAge]}`}>
            <b>{heightPerAge}</b>
          </div>
          <div className={`child-headlength-status ${headlengthPerAgeColorStats[headlengthPerAge]}`}>
            <b>{headlengthPerAge}</b>
          </div>
        </div>
      </>
    ),
    'body-data': (
      <div className="child-profile-card__data">
        <div className="data-item">
          berat:
          {' '}
          <b>
            {weight}
            kg
          </b>
        </div>
        <div className="data-item">
          tinggi:
          {' '}
          <b>
            {height}
            cm
          </b>
        </div>
        <div className="data-item">
          lingkar kepala:
          {' '}
          <b>
            {headlength}
            cm
          </b>
        </div>
      </div>
    ),
  };

  useEffect(() => {
    async function fetchChildData() {
      const response = await getChildData(id);
      if (!response.error) {
        const { data } = response;
        setName(data.name);
        setAge(data.age);
        setGender(data.gender);
        setWeight(data.weight);
        setHeight(data.height);
        setHeadLength(data.headlength);
        setDevelopment(data.healthStatus.development.result);
        setWeightPerAge(data.healthStatus.weightPerAge);
        setHeightPerAge(data.healthStatus.heightPerAge);
        setHeadLengthPerAge(data.healthStatus.headlengthPerAge);
        setInitialize(false);
      }
    }

    fetchChildData();
  }, []);

  return (
    <div
      className={`child-profile-card card ${displayStatus}`}
      onClick={(event) => onClickCardHandler(event)}
    >
      {
        intialize
          ? (
            <div className="loading-section">
              <div className="lds-facebook">
                <div />
                <div />
                <div />
              </div>
            </div>
          )
          : (
            <>
              <div className="child-profile-card__tag">
                <img alt="baby-icon" className="child-profile-card__tag__icon" src={`${process.env.PUBLIC_URL}/others/baby.png`} />
                <div className="child-profile-card__tag__detail">
                  <p className="child-name">{name}</p>
                  <div className="child-detail">
                    {age}
                    {' '}
                    Bulan |
                    {' '}
                    {gender}
                  </div>
                </div>
              </div>
              {statusElement[displayStatus]}
            </>
          )
      }
    </div>
  );
}

ChildProfileCard.propTypes = {
  id: PropTypes.string.isRequired,
  displayStatus: PropTypes.string.isRequired,
};

export default ChildProfileCard;
