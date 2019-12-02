import React, {Component} from 'react';
import axios from "axios";
import MealCard from "../mealCard";
import './favorites.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const mealCardSliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
};

export class Favorites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            favorites: [],
        };
    }

    componentDidMount() {
        const jwtToken = localStorage.getItem('jwtToken');

        axios
            .get('/favorites', {
                headers: {"x-access-token": `${jwtToken}`}
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
        const {loggedIn, favorites} = this.state;
        let favoritesList = [];

        // TODO: update frontend api and backend api to get if a meal is liked rather than workarounds
        if (loggedIn) {
            // for each favorited meal, render a new meal card
            for (let i = 0; i < favorites.length; i++) {
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
                        cuisineType={favorite.cuisineType}
                    />
                )
            }
        } else {

        }
        return (
            <div>
                <div className={"favorites-header"}>
                    <h1>Your Favorite Meals</h1>
                </div>

                <div className="favorites-row">
                    {favoritesList}
                </div>
            </div>
        );
    }
}

export default Favorites;