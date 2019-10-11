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
// class CuisineCards extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { num: 1 }
//   }
//   render() {
//     return(
//     <h1>
//       hello
//     </h1>
//     )
//   }
// }

export default CuisineCards;