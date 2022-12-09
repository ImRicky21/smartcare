/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getChildData, getSurveyData } from '../../data/network-data';
import AppBar from '../components/app-bar';
import BackButton from '../components/back-button';
import SurveyCard from '../components/survey-card';

function DevelopmentSurveyPage() {
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [survey, setSurvey] = useState({});
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
        const fetchedSurveyData = await getSurveyData({ id, age: data.age });
        if (!fetchedSurveyData.error) {
          setSurvey(fetchedSurveyData.data);
        }
      }
    }
    fetchChildData();
  }, []);
  return (
    <div className="main-content">
      <AppBar listActive="development-page" />
      <BackButton linkTo={`/child/development/${id}`} />
      {
              survey.BICARA_DAN_BAHASA
                ? (
                  <>

                    {survey.BICARA_DAN_BAHASA.map(
                      (value) => (
                        <SurveyCard key={getKey()} value={value} heading="Bicara dan Bahasa" />
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
                        <SurveyCard key={getKey()} value={value} heading="Gerak Halus" />
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
                        <SurveyCard key={getKey()} value={value} heading="Gerak Kasar" />
                      ),
                    )}
                  </>
                )
                : ''
            }
      {
              survey.SOSIAL_DAN_KEMANDIRIAN
                ? (
                  <>

                    {survey.SOSIAL_DAN_KEMANDIRIAN.map(
                      (value) => (
                        <SurveyCard key={getKey()} value={value} heading="Sosial dan Kemandirian" />
                      ),
                    )}
                  </>
                )
                : ''
            }
    </div>
  );
}

export default DevelopmentSurveyPage;
