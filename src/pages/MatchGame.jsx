import { useState } from 'react';
import Game from '../components/Game';
import styles from './MatchGame.module.css';

function MatchGame() {
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
    <div id="game-body" class={styles.overlay}>
      {/* Header Section */}
      <header>
        <h1>Match of Mistrust</h1>
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
      <div className={styles["btn-container"]}>
        <button className={styles["reset-btn"]} onClick={handleStartOrReset}>
          {gameStarted ? "Reset Game" : "Start Game"}
        </button>
      </div>
    </div>
  );
}

export default MatchGame;
