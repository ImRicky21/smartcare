/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

function SurveyCard({ heading, value }) {
  return (
    <div className="survey-card">
      <h4 className="survey-heading">{ heading }</h4>
      <div className="survey-item">{ value }</div>
    </div>
  );
}

SurveyCard.propTypes = {
  heading: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default SurveyCard;
