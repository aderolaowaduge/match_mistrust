import React from 'react';
import styles from './Home.module.css';



const Home = () => {
  return (
    <div id="home-body">
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles['hero-title']}>Medical Mistrust Among Black Women</h1>
        </div>
      </div>

      {/* Overview */}
      <section className={styles.overview}>
        <h2>Overview</h2>
        <p>
          This project explores the historical and ongoing medical mistrust experienced by Black women
          in the United States. Through research and interactive tools, we aim to educate and encourage
          awareness around this critical issue.
        </p>
      </section>

      {/* Navigation Links */}
      <section className={styles['navigation-links']}>
        <div className={styles["nav-card"]}>
          <a href="/research">
            <img src="/images/research.jpg" alt="Research" />
            <h3>Research</h3>
          </a>
        </div>
        <div className={styles["nav-card"]}>
          <a href="/match-game">
            <img src="/images/match-game.jpg" alt="Match Game" />
            <h3>Match Game</h3>
          </a>
        </div>
        <div className={styles["nav-card"]}>
          <a href="/about">
            <img src="/images/about.jpg" alt="About" />
            <h3>About</h3>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
