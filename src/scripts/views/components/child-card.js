/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getChildData } from '../../data/network-data';

function ChildCard({ childId, onDelete }) {
  const navigates = useNavigate();
  const [intialize, setInitialize] = useState(true);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [headlength, setHeadlength] = useState('');

  useEffect(() => {
    async function fetchChildData() {
      const response = await getChildData(childId);
      if (!response.error) {
        const { data } = response;
        setName(data.name);
        setAge(data.age);
        setGender(data.gender);
        setWeight(data.weight);
        setHeight(data.height);
        setHeadlength(data.headlength);
        setInitialize(false);
      }
    }

    fetchChildData();
  }, []);

  function onEditHandler() {
    navigates(`/child/edit/${childId}`);
  }

  return (
    <div className="child-profile-card card">
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
              <div className="child-profile-card__button-container">
                <button
                  type="button"
                  className="button-edit-child btn btn-green"
                  onClick={() => onEditHandler()}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="button-delete-child btn btn-red"
                  onClick={() => onDelete({ childId })}
                >
                  Hapus
                </button>
              </div>
            </>
          )
      }
    </div>
  );
}

ChildCard.propTypes = {
  childId: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ChildCard;
