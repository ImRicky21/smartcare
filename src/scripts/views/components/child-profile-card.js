/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getChildData } from '../../data/network-data';

function ChildProfileCard({ id }) {
  const navigates = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  // const [development, setDevelopment] = useState('---');
  const [weightPerAge, setWeightPerAge] = useState('---');
  const [heightPerAge, setHeightPerAge] = useState('---');
  const [headlengthPerAge, setHeadLengthPerAge] = useState('');
  // const [weight, setWeight] = useState('');
  // const [height, setHeight] = useState('');
  // const [headlength, setHeadLength] = useState('');
  const weightPerAgeColorStats = {
    kurus: 'highlight-yellow',
    gemuk: 'highlight-red',
    normal: 'highlight-green',
    'sangat-kurus': 'highlight-red',
  };

  const heightPerAgeColorStats = {
    tinggi: 'highlight-yellow',
    pendek: 'highlight-yellow',
    normal: 'highlight-green',
    'sangat-pendek': 'highlight-red',
  };

  const headlengthPerAgeColorStats = {
    makrosefali: 'highlight-red',
    mikrosefali: 'highlight-red',
    normal: 'highlight-green',
  };

  function onClickCardHandler() {
    navigates(`/child/growth/${id}`);
  }

  useEffect(() => {
    async function fetchChildData() {
      const response = await getChildData(id);
      if (!response.error) {
        const { data } = response;
        setName(data.name);
        setAge(data.age);
        setGender(data.gender);
        // setDevelopment(data.healthStatus.development);
        setWeightPerAge(data.healthStatus.weightPerAge);
        setHeightPerAge(data.healthStatus.heightPerAge);
        setHeadLengthPerAge(data.healthStatus.headlengthPerAge);
      }
    }

    fetchChildData();
  }, []);

  return (
    <div className="child-profile-card card" onClick={onClickCardHandler}>
      <div className="child-profile-card__tag">
        <img alt="baby-icon" className="child-profile-card__tag__icon" src="../../../public/others/baby.png" />
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
      <div className="child-profile-card__stats">
        <div className={`child-weight-status ${weightPerAgeColorStats[weightPerAge]}`}>{`BB: ${weightPerAge}`}</div>
        <div className={`child-height-status ${heightPerAgeColorStats[heightPerAge]}`}>{`PB: ${heightPerAge}`}</div>
        <div className={`child-headlength-status ${headlengthPerAgeColorStats[headlengthPerAge]}`}>{`LK: ${headlengthPerAge}`}</div>
      </div>
    </div>
  );
}

ChildProfileCard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ChildProfileCard;
