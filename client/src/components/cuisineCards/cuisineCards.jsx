import React, { Component } from "react";
import MealCard from "../mealCard";
import Axios from 'axios'

function CuisineCards(props) {

  const cards = props.meals.map(meal => 
    <
      MealCard 
      key={meal.id}
      {...meal }
    />
  )
  console.log(cards)
  return(
    <div>
      {cards}
    </div>
  )
}

export default CuisineCards;