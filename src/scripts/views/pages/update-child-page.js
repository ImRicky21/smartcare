/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import AppBar from '../components/app-bar';
import BackButton from '../components/back-button';
import { getChildData, putChildData } from '../../data/network-data';

function UpdateChildPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [childData, setChildData] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('perempuan');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [headlength, setHeadlength] = useState('');
  const [birthDate, setBirthDate] = useState(moment().format('YYYY-MM-DD'));

  const onWeightChangeHandler = (value) => {
    setWeight(value);
  };

  const onHeightChangeHandler = (value) => {
    setHeight(value);
  };

  const onHeadLengthChangeHandler = (value) => {
    setHeadlength(value);
  };

  async function updateChildHandler(event) {
    event.preventDefault();

    if (height <= 1) {
      alert('input tinggi badan salah');
      return;
    }
    if (weight <= 1) {
      alert('input berat badan salah');
      return;
    }
    if (headlength <= 1) {
      alert('input lingkar kepala badan salah');
      return;
    }

    const data = {
      ...childData,
      height,
      weight,
      headlength,
    };

    const response = await putChildData({ id, data });

    if (response.error) {
      alert(`error: ${response.message}`);
      return;
    }

    alert('succes');
    console.log(response);
    navigate(`/child/growth/${id}`);
  }

  useEffect(() => {
    async function fetchChildData() {
      const response = await getChildData(id);
      if (!response.error) {
        const { data } = response;
        setChildData(data);
        setName(data.name);
        setGender(data.gender);
        setWeight(data.weight);
        setHeight(data.height);
        setHeadlength(data.headlength);
        setBirthDate(data.birthDate);
      }
    }

    fetchChildData();
  }, []);

  return (
    <div className="main-content mb-5">
      <AppBar listActive="growth-page" />
      <BackButton linkTo={`/child/growth/${id}`} />
      <form className="form-add-child card">
        <div className="row-form">
          <label className="input-label" htmlFor="input-child-name">Nama</label>
          <input disabled value={name} className="input-field" id="input-child-name" type="text" placeholder="Nama" />
        </div>
        <div className="row-form">
          <label className="input-label">Gender</label>
          <div className="form-radio">
            <div className="form-check">
              <input disabled className="form-check-input" type="radio" name="flexRadioDefault" id="input-gender-male" value="laki-laki" defaultChecked={gender === 'laki-laki' ? 'true' : 'false'} />
              <label className="form-check-label" htmlFor="input-gender-male">
                Laki-laki
              </label>
            </div>
            <div className="form-check">
              <input disabled required className="form-check-input" type="radio" name="flexRadioDefault" id="input-gender-female" value="perempuan" defaultChecked={gender === 'perempuan' ? 'true' : 'false'} />
              <label className="form-check-label" htmlFor="input-gender-female">
                Perempuan
              </label>
            </div>
          </div>
        </div>
        <div className="row-form">
          <label className="input-label" htmlFor="input-date">Tanggal lahir</label>
          <input value={birthDate} disabled className="input-field" id="input-date" type="date" min="2002-01-01" max={moment().format('YYYY-MM-DD')} />
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
          onClick={(event) => updateChildHandler(event)}
        >
          Update
        </button>

      </form>
    </div>
  );
}

export default UpdateChildPage;
