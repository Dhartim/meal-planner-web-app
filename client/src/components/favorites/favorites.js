import React, { Component } from 'react';
import axios from "axios";
import CuisineCards from "../cuisineCards";

export class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false,
      favorites: [],
    };
  }

  componentDidMount(){
    const jwtToken = localStorage.getItem('jwtToken');

    axios
      .get('/favorites', {
        headers: {"x-access-token" : `${jwtToken}`}
      })
      .then(res => {
        console.log("res %s", res.data);
        this.setState({
          favorites: res.data,
          loggedIn: true
        })
      })
      .catch(error => error)
  }

  render() {
    const { loggedIn } = this.state;
    let favoritesList = [];

    if(loggedIn) {
      // favoritesList = this.state.favorites.map(favorite =>
      //   favorite.Meals.length > 0 &&
      //   <
      //     CuisineCards
      //     key={cuisine.id}
      //     meals={cuisine.Meals}
      //     cuisineType={cuisine.cuisineType}
      //     favorites={this.state.favorites}
      //   />
      // );
    } else {

    }
    return(
      <div>
        FAVORITES
        <p/>
        TODO:
        {favoritesList}
      </div>
    );
  }
}

export default Favorites;