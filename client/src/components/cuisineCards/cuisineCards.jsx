import React from "react";
import MealCard from "../mealCard";
import './cuisineCards.css';

function CuisineCards(props) {
  console.log(props);
  const cards = props.meals.map(meal => 
    <
      MealCard 
      key={meal.id}
      {...meal }
      cuisineType = {props.cuisineType}
    />
  )
  // console.log(cards)
  return(
    <div className='cuisine_list'>
      {/* <h3></h3> */}
      {cards}
    </div>
  )
}

export default CuisineCards;