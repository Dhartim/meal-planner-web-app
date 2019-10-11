import React, { Component } from "react";
import MealCard from "../mealCard";
import Axios from 'axios'
import './cuisineCards.css';

function CuisineCards(props) {

  const cards = props.meals.map(meal => 
    <
      MealCard 
      key={meal.id}
      {...meal }
    />
  )
  // console.log(cards)
  return(
    <div className='cuisine_list'>
      <h3></h3>
      {cards}
    </div>
  )
}

export default CuisineCards;