/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import AppBar from '../components/app-bar';
import BackButton from '../components/back-button';

function AddChildPage({ AddChildHandler }) {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('perempuan');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [headlength, setHeadlength] = useState('');
  const [birthDate, setBirthDate] = useState(moment().format('YYYY-MM-DD'));

  const onNameChangeHandler = (value) => {
    setName(value);
  };

  const onGenderChangeHandler = (value) => {
    setGender(value);
  };

  const onBirthDateChangeHandler = (value) => {
    setBirthDate(value);
  };

  const onWeightChangeHandler = (value) => {
    setWeight(value);
  };

  const onHeightChangeHandler = (value) => {
    setHeight(value);
  };

  const onHeadLengthChangeHandler = (value) => {
    setHeadlength(value);
  };

  return (
    <div className="main-content mb-5">
      <AppBar listActive="growth-page" />
      <BackButton linkTo="/" />
      <form className="form-add-child card">
        <div className="row-form">
          <label className="input-label" htmlFor="input-child-name">Nama</label>
          <input value={name} onChange={(event) => onNameChangeHandler(event.target.value)} required className="input-field" id="input-child-name" type="text" placeholder="Nama" />
        </div>
        <div className="row-form">
          <label className="input-label">Gender</label>
          <div className="form-radio">
            <div className="form-check">
              <input onChange={(event) => onGenderChangeHandler(event.target.value)} required className="form-check-input" type="radio" name="flexRadioDefault" id="input-gender-male" value="laki-laki" />
              <label className="form-check-label" htmlFor="input-gender-male">
                Laki-laki
              </label>
            </div>
            <div className="form-check">
              <input onChange={(event) => onGenderChangeHandler(event.target.value)} required className="form-check-input" type="radio" name="flexRadioDefault" id="input-gender-female" value="perempuan" defaultChecked />
              <label className="form-check-label" htmlFor="input-gender-female">
                Perempuan
              </label>
            </div>
          </div>
        </div>
        <div className="row-form">
          <label className="input-label" htmlFor="input-date">Tanggal lahir</label>
          <input value={birthDate} onChange={(event) => onBirthDateChangeHandler(event.target.value)} required className="input-field" id="input-date" type="date" min={moment().subtract(24, 'months').format('YYYY-MM-DD')} max={moment().format('YYYY-MM-DD')} />
        </div>
        <div className="row-form">
          <label className="input-label" htmlFor="input-weight">Berat Badan</label>
          <input value={weight} onChange={(event) => onWeightChangeHandler(event.target.value)} required className="input-field" id="input-weight" type="number" min="1" placeholder="kg" />
        </div>
        <div className="row-form">
          <label className="input-label" htmlFor="input-height">Tinggi Badan</label>
          <input value={height} onChange={(event) => onHeightChangeHandler(event.target.value)} required className="input-field" id="input-height" type="number" min={1} placeholder="cm" />
        </div>
        <div className="row-form">
          <label className="input-label" htmlFor="input-headlength">Lingkar Kepala</label>
          <input value={headlength} onChange={(event) => onHeadLengthChangeHandler(event.target.value)} required className="input-field" id="input-headlength" type="number" min={1} placeholder="cm" />
        </div>
        <button
          type="submit"
          className="button-save-child btn btn-primary"
          onClick={
              (event) => AddChildHandler({
                event,
                name,
                gender,
                birthDate,
                weight,
                height,
                headlength,
              })
}
        >
          Simpan
        </button>

      </form>
    </div>
  );
}

AddChildPage.propTypes = {
  AddChildHandler: PropTypes.func.isRequired,
};

export default AddChildPage;
