
import React, { useState } from 'react';
import FlashcardControls from './FlashcardControls';
import PropTypes from 'prop-types';

const FlashcardWithControls = ({ flashcard, onNext, onPrev }) => {
  const [isFront, setIsFront] = useState(true);

  const handleFlip = () => {
    setIsFront(!isFront);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      {isFront ? (
        <div className="front">
          <p>{flashcard.question}</p>
          <FlashcardControls onNextCard={onNext} />
        </div>
      ) : (
        <div className="back">
          <p>{flashcard.answer}</p>
          <button onClick={onPrev}>Back</button>
          <button onClick={onNext}>Next</button>
        </div>
      )}
    </div>
  );
};

FlashcardWithControls.propTypes = {
  flashcard: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default FlashcardWithControls;
