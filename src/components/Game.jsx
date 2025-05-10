import React, { useState, useEffect } from "react";
import Card from "./Card"

let clickAudio = new Audio("../assets/audio/click.wav");
let matchAudio = new Audio("../assets/audio/match.wav");
let winAudio = new Audio("../assets/audio/win.wav");

function Game() {
  const totalMatchesNeeded = 6;
  const [cards, setCards] = useState([]);
  const [flippedPair, setFlippedPair] = useState([]);
  const [flipCount, setFlipCount] = useState(0);
  const [matchCount, setMatchCount] = useState(0);

  // Setup game once
  useEffect(() => {
  // Move createCardObjects inside useEffect
  function createCardObjects() {
    const imageClasses = shuffleCardImageClasses();
    return imageClasses.map((imgClass, idx) => ({
      id: idx,
      imageClass: imgClass,
      isFlipped: false,
      isMatched: false
    }));
  }

  const initialCards = createCardObjects();
  setCards(initialCards);
}, []);  // Empty dependency array, only runs once

   // Function to shuffle image classes
  function shuffleCardImageClasses() {
    // Array of card images (replace these with your actual image classes)
    const imageClasses = [
      "image-1", "image-2", "image-3", "image-4", "image-5", "image-6",
      "image-1", "image-2", "image-3", "image-4", "image-5", "image-6"
    ];

    // Shuffle the array
    for (let i = imageClasses.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imageClasses[i], imageClasses[j]] = [imageClasses[j], imageClasses[i]]; // Swap elements
    }

    return imageClasses;
  }


  const handleCardClick = (clickedCard) => {
    if (clickedCard.isFlipped || clickedCard.isMatched || flippedPair.length === 2) return;

    clickAudio.play();
    const updatedCards = cards.map((c) =>
      c.id === clickedCard.id ? { ...c, isFlipped: true } : c
    );
    setCards(updatedCards);
    const newFlippedPair = [...flippedPair, { ...clickedCard, isFlipped: true }];
    setFlippedPair(newFlippedPair);
    setFlipCount((count) => count + 1);

    if (newFlippedPair.length === 2) {
      const [first, second] = newFlippedPair;
      if (first.imageClass === second.imageClass) {
        // Match!
        setTimeout(() => {
          const withMatches = updatedCards.map((c) =>
            c.imageClass === first.imageClass ? { ...c, isMatched: true } : c
          );
          setCards(withMatches);
          setMatchCount((count) => {
            const newCount = count + 1;
            if (newCount === totalMatchesNeeded) winAudio.play();
            else matchAudio.play();
            return newCount;
          });
        }, 500);
      } else {
        // Not a match
        setTimeout(() => {
          const resetCards = cards.map((c) =>
            c.id === first.id || c.id === second.id ? { ...c, isFlipped: false } : c
          );
          setCards(resetCards);
        }, 1000);
      }
      setTimeout(() => setFlippedPair([]), 1000);
    }
  };

  return (
    <div>
      <h2>Flips: {flipCount}</h2>
      <h2>Matches: {matchCount}</h2>
      <div id="card-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default Game;
