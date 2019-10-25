import React from 'react';
import './mealCard.css';
import Card from './FrontCard';

function mealCard(props) {
  return (
    <div className="card-container">
      <Card meal= {props} />
    </div>
  );
}

export default mealCard;