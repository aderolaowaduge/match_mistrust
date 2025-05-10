import React, { useState } from 'react';
import Game from './components/Game';
import './style.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameKey, setGameKey] = useState(0); // Used to force re-mount Game

  const handleStartOrReset = () => {
    if (gameStarted) {
      setGameKey(prev => prev + 1); // Reset the game
    } else {
      setGameStarted(true); // Start the game
    }
  };

  return (
    <div>
      {/* Header Section */}
      <header>
        <h1>Hiking Matching Game</h1>
      </header>

      {/* Game Container */}
      <section id="game-container">
        {gameStarted && (
          <>
            <div id="ui-container">
              {/* Flip and Match counts should come from Game */}
              <Game key={gameKey} />
            </div>
          </>
        )}
      </section>

      {/* Reset/Start Button */}
      <div className="btn-container">
        <button className="reset-btn" onClick={handleStartOrReset}>
          {gameStarted ? "Reset Game" : "Start Game"}
        </button>
      </div>
    </div>
  );
}

export default App;
