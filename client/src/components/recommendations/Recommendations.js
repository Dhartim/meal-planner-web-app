import React, { Component } from 'react';
import axios from "axios";
import MealCard from "../mealCard";

//change api call for recommendation 
export class Recommendations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      recommendations: [],
    };
  }

  componentDidMount(){
    const jwtToken = localStorage.getItem('jwtToken');

    axios
      .get('/favorites', {
        headers: {"x-access-token" : `${jwtToken}`}
      })
      .then(res => {
        this.setState({
          recommendations: res.data,
          loggedIn: true
        })
      })
      .catch(error => error)
  }

  render() {
    const { loggedIn, recommendations } = this.state;
    let recommendationList = [];

    // TODO: update frontend api and backend api to get if a meal is liked rather than workarounds
    if(loggedIn) {
      // for each favorited meal, render a new meal card
      for(let i = 0; i < recommendations.length; i++) {
        let recommend = recommendations[i];
        recommendationList.push(
          <
            MealCard
            key={recommend.id}
            {...recommend}
            cuisineType = {recommend.cuisineType}
          />
        )
      }
    } else {

    }
    return(
      <div>
        <div className="favorites__row">
          {recommendationList}
        </div>
      </div>
    );
  }
}

export default Recommendations;