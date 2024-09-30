import React, { useState } from 'react';
import Flashcard from './Flashcard';
import FlashcardSetInfo from './FlashcardSetInfo';
import FlashcardControls from './FlashcardControls';
import './App.css';

const App = () => {
  const flashcards = [
    { id: 1, question: 'Who is the main protagonist of My Hero Academia?', answer: 'Izuku Midoriya', category: 'Character', image: 'https://via.placeholder.com/150' },
    { id: 2, question: 'What is the name of the academy where students train to become heroes?', answer: 'U.A. High School', category: 'Location', image: 'https://via.placeholder.com/150' },
    { id: 3, question: 'What is the quirk of Katsuki Bakugo?', answer: 'Explosion', category: 'Quirk', image: 'https://via.placeholder.com/150' },
    { id: 4, question: 'Who is the number one hero in My Hero Academia?', answer: 'All Might', category: 'Character', image: 'https://via.placeholder.com/150' },
    { id: 5, question: 'What is the name of the villain organization led by Tomura Shigaraki?', answer: 'League of Villains', category: 'Organization', image: 'https://via.placeholder.com/150' },
    { id: 6, question: 'What is the quirk of Shoto Todoroki?', answer: 'Half-Cold Half-Hot', category: 'Quirk', image: 'https://via.placeholder.com/150' },
    { id: 7, question: 'Who is the principal of U.A. High School?', answer: 'Nezu', category: 'Character', image: 'https://via.placeholder.com/150' },
    { id: 8, question: 'What is the hero name of Tenya Iida?', answer: 'Ingenium', category: 'Character', image: 'https://via.placeholder.com/150' },
    { id: 9, question: 'What is the quirk of Ochaco Uraraka?', answer: 'Zero Gravity', category: 'Quirk', image: 'https://via.placeholder.com/150' },
    { id: 10, question: 'Who is the hero known as Eraser Head?', answer: 'Shota Aizawa', category: 'Character', image: 'https://via.placeholder.com/150' },
    { id: 11, question: 'What is the quirk of Eijiro Kirishima?', answer: 'Hardening', category: 'Quirk', image: 'https://via.placeholder.com/150' },
    { id: 12, question: 'Who is the hero known as Froppy?', answer: 'Tsuyu Asui', category: 'Character', image: 'https://via.placeholder.com/150' },
    { id: 13, question: 'What is the quirk of Momo Yaoyorozu?', answer: 'Creation', category: 'Quirk', image: 'https://via.placeholder.com/150' },
    { id: 14, question: 'Who is the hero known as Red Riot?', answer: 'Eijiro Kirishima', category: 'Character', image: 'https://via.placeholder.com/150' },
    { id: 15, question: 'What is the quirk of Fumikage Tokoyami?', answer: 'Dark Shadow', category: 'Quirk', image: 'https://via.placeholder.com/150' },
    { id: 16, question: 'Who is the hero known as Chargebolt?', answer: 'Denki Kaminari', category: 'Character', image: 'https://via.placeholder.com/150' },
    { id: 17, question: 'What is the quirk of Mina Ashido?', answer: 'Acid', category: 'Quirk', image: 'https://via.placeholder.com/150' },
    { id: 18, question: 'Who is the hero known as Earphone Jack?', answer: 'Kyoka Jiro', category: 'Character', image: 'https://via.placeholder.com/150' },
  ];

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className="App" style={{ color: 'var(--text-color)' }}>
      <FlashcardSetInfo 
        title="My Hero Academia Flashcards" 
        description="Flashcards to help you learn about My Hero Academia." 
        totalCards={flashcards.length} 
      />
      <Flashcard flashcard={flashcards[currentCardIndex]} />
      <FlashcardControls onNextCard={handleNextCard} />
    </div>
  );
};

export default App;