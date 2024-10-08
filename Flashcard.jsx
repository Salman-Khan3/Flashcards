import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Flashcard = ({ flashcard, onNext, onPrev }) => {
  const [flipped, setFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState(null);


  const handleGuessSubmit = () => {
    if (userGuess.toLowerCase() === flashcard.answer.toLowerCase()) {
      setFeedback('Correct!');
    } else {
      setFeedback('Incorrect!');
    }
    setFlipped(true);
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
      <div className="front">
        {!flipped && (
          <>
            <p>{flashcard.question}</p>
            <input
              type="text"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
            />
            {flashcard.image && <img src={flashcard.image} alt="flashcard visual" />}
            <p>Category: {flashcard.category}</p>
            <button onClick={handleGuessSubmit}>Submit</button>
            {feedback && <p>{feedback}</p>}
          </>
        )}
      </div>
      <div className="back">
        {flipped && (
          <>
            <p>{flashcard.answer}</p>
            <button onClick={onPrev}>Back</button>
            <button onClick={onNext}>Next</button>
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
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default Flashcard;
