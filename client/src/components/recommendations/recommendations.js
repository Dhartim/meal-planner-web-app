import React, { Component } from 'react';
import axios from "axios";
import MealCard from "../mealCard";
//import Slider from "react-slick";

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
      console.log("RECOMMENDATION = ", this.state.recommendations);
  }

  render() {
    const { loggedIn, recommendations } = this.state;
    let recommendationList = [];
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
  };
    if(loggedIn) {
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
          {/* <Slider {...settings}> */}
            {recommendationList}
          {/* </Slider> */}
        </div>
      </div>
    );
  }
}

export default Recommendations;