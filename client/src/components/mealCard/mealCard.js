import React from 'react';
import './mealCard.css';
import FrontCard from './FrontCard';

function Card(props) {
  return (
    <div className="card-container">
      <FrontCard meal= {props} className= "front"/>
    </div>
  );
}

export default Card;