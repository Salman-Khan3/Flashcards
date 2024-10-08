
import React from 'react';
import PropTypes from 'prop-types';
import FlashcardControls from './FlashcardControls';

const Flashcard = ({ flashcard, onNext, onPrev }) => {
  return (
    <div className="flashcard">
      <div className="front">
        <p>{flashcard.question}</p>
        <FlashcardControls onNextCard={onNext} />
      </div>
      <div className="back">
        <p>{flashcard.answer}</p>
        <button onClick={onPrev}>Back</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

Flashcard.propTypes = {
  flashcard: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default Flashcard;
