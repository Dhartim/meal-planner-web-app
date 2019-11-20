import React, { Component } from 'react';
import axios from 'axios';

import CuisineCards from '../cuisineCards'
import Spinner from '../subcomponents/spinner'

import {UserContext} from "../../context/usercontext";
import Recommendations from "../recommendations";
import {Button, ButtonGroup} from "@material-ui/core";
import MealCard from "../mealCard";
import Slider from "react-slick";

const sortingOrderStates = {
  CUISINE_TYPE: 'cuisineType',
  DIET_TYPE: 'dietType',
  PRICE: {
    ASCENDING: 'price.ascending',
    DESCENDING: 'price.descending',
  },
  CALORIES: 'calories',
};

const dietType = {
  VEGETARIAN: 'vegetarian',
  VEGAN: 'vegan',
  KETO: 'ketogenic',

};

const mealCardSliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
};


export class Home extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      cuisines: [],
      sortOrderState: sortingOrderStates.CUISINE_TYPE,
      loader: true,
      loader2: true,
    }
  }

  componentDidMount(){
    const orderOption = localStorage.getItem('sortOrder');
    console.log('orderOption=%s', orderOption);

    if(orderOption !== undefined && orderOption !== null) {
      this.setState({
        sortOrderState: orderOption,
      })
    }

    axios
      .get('/cuisines')
      .then(res => {
        this.setState({
          cuisines: res.data,
          loader: false
        })
      })
      .catch(error => {
        console.log("Error = %s", error);
      })
  }

  render() {
    const { order, cuisines } = this.state;
    console.log('order=%s', order);

    let isLoading = true;

    var meals;

    const userContext = this.context;
    console.log("HOME - context={userId: %s, authorized: %s}", userContext.userId, userContext.authorized);

    if(!this.state.loader)
    {
      switch(order) {
        case sortingOrderStates.CUISINE_TYPE:
          let cuisineList = [];

          cuisineList
            = cuisines.map(cuisine =>
              cuisine.Meals.length > 0 &&
              <
                CuisineCards
                key={cuisine.id}
                meals={cuisine.Meals}
                cuisineType={cuisine.cuisineType}
              />
            );

          meals = cuisineList;
          break;
        case sortingOrderStates.DIET_TYPE:
          let mealsByDietType = [];


          {/*<h2>{ props.cuisineType }</h2>*/}

          for(let i = 0; i < cuisines.length; i++) {
            let meal = cuisines[i];
            // console.log("favorite[%d]={dishName: %s\nnutritionInfo: %s\nimgUrl: %s\nprepTime: %s\ncookTime: %s\nrecipe: %s\ncuisineId: %s\ncuisineType: %s\n}", i,
            //   favorite.dishName,
            //   favorite.nutritionInfo,
            //   favorite.imgUrl,
            //   favorite.prepTime,
            //   favorite.cookTime,
            //   favorite.recipe,
            //   favorite.cuisineId);

            {/*<*/}
            {/*  MealCard*/}
            {/*  key={meal.id}*/}
            {/*  {...meal}*/}
            {/*  cuisineType = {meal.cuisineType}*/}
            {/*/>*/}

            // mealsByDietType.push(
            //   <Slider {...mealCardSliderSettings}>
            //     {
            //       props.meals.map(meal =>
            //         <
            //           MealCard
            //           key={meal.id}
            //           {...meal }
            //           cuisineType = {meal.cuisineType}
            //         />
            //       )}
            //   </Slider>
            // )
          }
          // mealsByDietType
          //   = cuisines.map(cuisine =>
          //   cuisine.Meals.length > 0 &&
          //   <
          //     CuisineCards
          //     key={cuisine.id}
          //     meals={cuisine.Meals}
          //     cuisineType={cuisine.cuisineType}
          //   />
          // );

          meals = 'DIET_TYPE_PLACEHOLDER';
          break;
        case sortingOrderStates.CALORIES:
          meals = 'CALORIES_PLACEHOLDER';
          break;
        case sortingOrderStates.PRICE.ASCENDING:
          meals = 'PRICE_ASCENDING_PLACEHOLDER';
          break;
        case sortingOrderStates.PRICE.DESCENDING:
          meals = 'PRICE_DESCENDING_PLACEHOLDER';
          break;
      }
      isLoading = false;
    }
    else
    {
      isLoading = true;
    }

    return(
      <div>
        <div>
          <h2>Recommendations</h2>
          <Recommendations />
        </div>
        <div>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Button
              variant="outlined"
              onClick={() => {
                localStorage.setItem('sortOrder', sortingOrderStates.CUISINE_TYPE);
                this.setState({
                  sortOrderState: sortingOrderStates.CUISINE_TYPE
                })
              }}
              color="inherit"
            >Cuisine Type</Button>
            <Button
              variant="outlined"
              onClick={() => {
                localStorage.setItem('sortOrder', sortingOrderStates.DIET_TYPE);
                this.setState({
                  sortOrderState: sortingOrderStates.DIET_TYPE
                })
              }}
              color="inherit"
            >Diet Type</Button>
            <Button
              variant="outlined"
              onClick={() => {
                localStorage.setItem('sortOrder', sortingOrderStates.CALORIES);
                this.setState({
                  sortOrderState: sortingOrderStates.CALORIES
                })
              }}
              color="inherit"
            >Calories</Button>
            <Button
              variant="outlined"
              onClick={() => {
                localStorage.setItem('sortOrder', sortingOrderStates.PRICE.ASCENDING);
                this.setState({
                  sortOrderState: sortingOrderStates.PRICE.ASCENDING
                })
              }}
              color="inherit"
            >Price Ascending</Button>
            <Button
              variant="outlined"
              onClick={() => {
                localStorage.setItem('sortOrder', sortingOrderStates.PRICE.DESCENDING);
                this.setState({
                  sortOrderState: sortingOrderStates.PRICE.DESCENDING
                })
              }}
              color="inherit"
            >Price Descending</Button>
          </ButtonGroup>
        </div>
        {
          !isLoading ? meals : <Spinner />
        }
      </div>
    );
  }
}
export default Home;