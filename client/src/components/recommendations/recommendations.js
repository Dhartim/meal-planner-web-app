import React, { Component } from "react";
import axios from "axios";
import MealCard from "../mealCard";
class Recommendations extends Component{
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
          .get('/recommendations', {
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
    //recommendation will have column with slider but it will have recommendated meals as per
    // questionnaire
    // it will be topmost and fixed row for all users
    render(){
        const { loggedIn, recommendations } = this.state;
        let recommendationList = [];
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
                <h2>Recommendations</h2>
                {recommendationList}
            </div>
        );
    }
}
export default Recommendations;