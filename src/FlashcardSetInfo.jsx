import React from 'react';

const FlashcardSetInfo = ({ title, description, totalCards }) => {
  return (
    <div className="flashcard-set-info">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Total Cards: {totalCards}</p>
    </div>
  );
};

export default FlashcardSetInfo;