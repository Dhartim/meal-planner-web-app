import React from 'react';
import './mealCard.css';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

function Card(props) {
  
  return (
    <div className="card-container">
        <div className="card">
            <div className="front">
                <FrontCard meal= {props}/>
            </div>
            <div className="back">
                <BackCard meal= {props}/>
            </div>
        </div>
    </div>
  );
}

export default Card;