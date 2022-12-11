/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getGrowthFeedback } from '../../data/network-data';

function WeightStatusCard({ status }) {
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    async function fecthGrowthFeedback() {
      if (status) {
        const { data } = await getGrowthFeedback({ measurement: 'weight', status });
        setFeedback(data);
      }
    }

    fecthGrowthFeedback();
  }, []);

  return (
    <div className="growth-result card">
      <p className="growth-result__indicator">Indikator</p>
      <h3 className="growth-result__heading">
        <b>Berat Badan</b>
        {' '}
        per
        {' '}
        <b>Umur</b>
      </h3>
      <div className="growth-result__status highlight-green">Status Gizi: Sehat</div>
      <div className="growth-result__feedback">
        <b>Feedback:</b>
        {' '}
        <ul>
          {feedback ? feedback.map((dataFeedback) => <li>{dataFeedback}</li>) : ''}
        </ul>
      </div>
    </div>
  );
}

WeightStatusCard.propTypes = {
  status: PropTypes.string.isRequired,
};

export default WeightStatusCard;
