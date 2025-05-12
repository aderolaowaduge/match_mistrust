import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Match of Mistrust</h1>
      <p className="subtitle">
        A memory game unpacking medical mistrust among Black women in the U.S.
      </p>

      <section className="research-section">
        <h2>Why This Matters</h2>
        <p>
          Medical mistrust is a survival response rooted in history — from the experimentation on enslaved women to ongoing disparities in treatment and pain management. 
          Today, Black women continue to face bias, dismissal, and systemic neglect in healthcare settings.
        </p>
        <p>
          <strong>Match of Mistrust</strong> is more than a game: it’s a way to engage with difficult truths. 
          As you flip and match cards, you also uncover stories, terms, and experiences that reflect a legacy of mistrust — and the need for change.
        </p>
      </section>

      <section className="play-invite">
        <h2>Play to Learn</h2>
        <p>
          Click on "Map Game" in the navigation bar to begin. Every match reveals a truth.
        </p>
      </section>
    </div>
  );
}

export default Home;
