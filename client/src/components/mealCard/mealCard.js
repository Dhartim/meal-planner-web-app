import React from 'react';
import './mealCard.css';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

function Card() {
  return (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <FrontCard/>
            </div>
            <div className="back">
                <BackCard/>
            </div>
        </div>
    </div>
  );
}

export default Card;