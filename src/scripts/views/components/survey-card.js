/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
function SurveyCard({ label, value, onAnswer }) {
  const [answer, setAnswer] = useState('-');
  function onButtonYesClick() {
    if (answer !== 'ya') {
      onAnswer(label, 'ya');
      setAnswer('ya');
    }
  }

  function onButtonNoClick() {
    if (answer !== 'tidak') {
      onAnswer(label, 'tidak');
      setAnswer('tidak');
    }
  }

  return (
    <div className="development-survey-section__question card">
      <div className="question-section">
        <h4 className="question-section__label">{ label }</h4>
        <div className="question-section__content">{ value }</div>
        <div className="question-section__answer">
          Jawaban:
          {' '}
          { answer }
        </div>
      </div>
      <div className="answer-section">
        <button onClick={onButtonYesClick} className="button-answer-yes btn-green" type="button">YA</button>
        <button onClick={onButtonNoClick} className="button-answer-no btn-red" type="button">TIDAK</button>
      </div>
    </div>
  );
}

SurveyCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default SurveyCard;
