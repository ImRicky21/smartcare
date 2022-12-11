/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getChildData, getSurveyData, setChildDevelopmentData } from '../../data/network-data';
import AppBar from '../components/app-bar';
import BackButton from '../components/back-button';
import SurveyCard from '../components/survey-card';

function DevelopmentSurveyPage({ authorizeChildId }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [answers, setAnswers] = useState([-1, -1, -1, -1]);
  const [age, setAge] = useState('');
  const [survey, setSurvey] = useState({});
  const [childStatus, setChildStatus] = useState('');
  let key = 0;

  function getKey() {
    key += 1;
    return key;
  }

  function onAnswerHandler(label, answer) {
    const labelIndex = {
      'Bicara dan Bahasa': 0,
      'Gerak Halus': 1,
      'Gerak Kasar': 2,
      'Sosialisasi dan Kemandirian': 3,
    };
    const tempAnswers = [...answers];
    if (tempAnswers[labelIndex[label]] === -1) tempAnswers[labelIndex[label]] = 0;
    if (answer === 'ya') tempAnswers[labelIndex[label]] += 1;
    if (answer === 'tidak' && tempAnswers[labelIndex[label]] > 0) tempAnswers[labelIndex[label]] -= 1;
    setAnswers([...tempAnswers]);
  }

  async function onSubmit() {
    if (answers.indexOf(-1) !== -1) {
      Swal.fire({
        icon: 'warning',
        title: 'Isi Semua Survey',
      });
      return;
    }
    const { error, message } = await setChildDevelopmentData({ id, age, answer: answers });
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error dalam menyimpan data perkembangan anak',
        text: message,
      });
    }
    navigate(`/child/development/${id}`);
  }

  useEffect(() => {
    async function fetchChildData() {
      const response = await getChildData(id);
      if (!response.error) {
        const { data } = response;
        setAge(data.age);
        const fetchedSurveyData = await getSurveyData({ id, age: data.age });
        if (!fetchedSurveyData.error) {
          setSurvey(fetchedSurveyData.data);
          setChildStatus(fetchedSurveyData.data.status);
        }
      }
    }
    authorizeChildId(id);
    fetchChildData();
  }, []);
  return (
    <div className="main-content">
      <AppBar listActive="development-page" />
      <BackButton linkTo={`/child/development/${id}`} />
      <div className="development-survey-section__heading card">
        <h1 className="development-survey-section__heading__heading-item">
          Jawab pertanyaan dengan Ya atau Tidak
        </h1>
        <p className="development-survey-section__heading__content-item">
          pertanyaan yang disediakan telah disesuaikan untuk
          {' '}
          {childStatus}
        </p>
      </div>
      {
              survey.BICARA_DAN_BAHASA
                ? (
                  <>

                    {survey.BICARA_DAN_BAHASA.map(
                      (value) => (
                        <SurveyCard onAnswer={(label, answer) => onAnswerHandler(label, answer)} key={getKey()} value={value} label="Bicara dan Bahasa" />
                      ),
                    )}
                  </>
                )
                : ''
            }
      {
              survey.GERAK_HALUS
                ? (
                  <>

                    {survey.GERAK_HALUS.map(
                      (value) => (
                        <SurveyCard onAnswer={(label, answer) => onAnswerHandler(label, answer)} key={getKey()} value={value} label="Gerak Halus" />
                      ),
                    )}
                  </>
                )
                : ''
            }
      {
              survey.GERAK_KASAR
                ? (
                  <>

                    {survey.GERAK_KASAR.map(
                      (value) => (
                        <SurveyCard onAnswer={(label, answer) => onAnswerHandler(label, answer)} key={getKey()} value={value} label="Gerak Kasar" />
                      ),
                    )}
                  </>
                )
                : ''
            }
      {
              survey.SOSIALISASI_DAN_KEMANDIRIAN
                ? (
                  <>

                    {survey.SOSIALISASI_DAN_KEMANDIRIAN.map(
                      (value) => (
                        <SurveyCard onAnswer={(label, answer) => onAnswerHandler(label, answer)} key={getKey()} value={value} label="Sosialisasi dan Kemandirian" />
                      ),
                    )}
                  </>
                )
                : ''
            }
      <button onClick={() => onSubmit()} type="button" className="development-survey-submit card btn-green">SUBMIT</button>
    </div>
  );
}

DevelopmentSurveyPage.propTypes = {
  authorizeChildId: PropTypes.func.isRequired,
};

export default DevelopmentSurveyPage;
