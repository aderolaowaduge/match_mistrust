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
    // Array of card images
    const imageClasses = [
      "words-antibiotic", "image-antibiotic", "words-black", "image-black", "words-christmas", "image-christmas",
      "words-emergency", "image-emergency", "words-guinea", "image-guinea", "words-late", "image-late"
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
    

    if (newFlippedPair.length === 2) {
      setFlipCount((count) => count + 1);
      const [first, second] = newFlippedPair;
      // image classes are off the form "words *class*" or "image *class*"
      if (first.imageClass.split('-')[1] === second.imageClass.split('-')[1]) {
        // Match!
        setTimeout(() => {
          const withMatches = updatedCards.map((c) =>
            c.imageClass.split('-')[1] === first.imageClass.split('-')[1] ? { ...c, isMatched: true } : c
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
          <Card
            key={card.id}
            imageClass={card.imageClass}
            isFlipped={card.isFlipped}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
}

export default Game;
