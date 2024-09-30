import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="front">
        {!flipped && <p>{flashcard.question}</p>}
      </div>
      <div className="back">
        {flipped && (
          <>
            <p>{flashcard.answer}</p>
          </>
        )}
      </div>
    </div>
  );
};

Flashcard.propTypes = {
  flashcard: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string,
  }).isRequired,
};

export default Flashcard;