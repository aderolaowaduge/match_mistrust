import React from 'react';
import './Card.css'; //global CSS for now but come back and change to modules with clsx

const Card = ({ imageClass, isFlipped, onClick }) => {
  const cardClass = `card ${imageClass} ${isFlipped ? 'flipped' : ''}`;

  return (
    <div className={cardClass} onClick={onClick}>
      <div className="card-down" />
      <div className="card-up" />
    </div>
  );
};

export default Card;
