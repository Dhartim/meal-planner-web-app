import React from 'react';
import './mealCard.css';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

function Card() {
  return (
    <div class="card-container">
        <div class="card">
            <div class="front">
                <FrontCard/>
            </div>
            <div class="back">
                <BackCard/>
            </div>
        </div>
    </div>
  );
}

export default Card;