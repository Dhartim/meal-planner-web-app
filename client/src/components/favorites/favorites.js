import React, { Component } from 'react';
import axios from "axios";
import MealCard from "../mealCard";
// import CuisineCards from "../cuisineCards";

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
        this.setState({
          favorites: res.data,
          loggedIn: true
        })
      })
      .catch(error => error)
  }

  render() {
    const { loggedIn, favorites } = this.state;
    let favoritesList = [];

    // TODO: update frontend api and backend api to get if a meal is liked rather than workarounds
    if(loggedIn) {
      for(let i = 0; i < favorites.length; i++) {
        let favorite = favorites[i];
        // console.log("favorite[%d]={dishName: %s\nnutritionInfo: %s\nimgUrl: %s\nprepTime: %s\ncookTime: %s\nrecipe: %s\ncuisineId: %s\ncuisineType: %s\n}", i,
        //   favorite.dishName,
        //   favorite.nutritionInfo,
        //   favorite.imgUrl,
        //   favorite.prepTime,
        //   favorite.cookTime,
        //   favorite.recipe,
        //   favorite.cuisineId);
        favoritesList.push(
          <
            MealCard
            key={favorite.id}
            {...favorite}
            cuisineType = {favorite.cuisineType}
            // favorites = {favorite.favorites}
            // meal={favorite}
            // key={favorite.id}
            // meals={favorite.Meals}
            // cuisineType={favorite.cuisineType}
            // favorites={this.state.favorites}
          />
        )
      }
      // favorites.map(favorite => {
      //   console.log("favorite=%s", favorite.id);
      //   return favorite.Meals.length > 0 &&
      //   <
      //     CuisineCards
      //     key={favorite.id}
      //     meals={favorite.Meals}
      //     cuisineType={favorite.cuisineType}
      //     // favorites={this.state.favorites}
      //   />
      // });
    } else {

    }
    return(
      <div>
        <h2>FAVORITES</h2>
        {favoritesList}
      </div>
    );
  }
}

export default Favorites;