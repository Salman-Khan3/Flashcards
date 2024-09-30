import React from 'react';
import PropTypes from 'prop-types';

const FlashcardControls = ({ onNextCard }) => {
  return (
    <div className="flashcard-controls">
      <button onClick={onNextCard}>Next</button>
    </div>
  );
};

FlashcardControls.propTypes = {
  onNextCard: PropTypes.func.isRequired,
};

export default FlashcardControls;