import React, {Component} from 'react';
import axios from 'axios';
import Spinner from '../subcomponents/spinner'

import {UserContext} from "../../context/usercontext";
import Recommendations from "../recommendations";
import {Button, ButtonGroup} from "@material-ui/core";
import MealCard from "../mealCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './sliderCards.css';

const sortingOrderStates = {
  CUISINE_TYPE: 'cuisineType',
  DIET_TYPE: 'dietType',
  PRICE: {
    ASCENDING: 'price.ascending',
    DESCENDING: 'price.descending',
  },
  CALORIES: 'calories',
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
      meals: [],
      sortOrderState: sortingOrderStates.CUISINE_TYPE,
      loader: true,
      loader2: true,
    }
  }

  componentDidMount(){
    const token = localStorage.getItem('jwtToken');
    const orderOption = localStorage.getItem('sortOrder');

    axios
      .get('/meals',{
        headers: {
          'x-access-token': token
        }
      })
      .then(res => {
        this.setState({
          meals: res.data,
          loader: false
        })
      })
      .catch(error => {
        console.log("Error = %s", error);
      });

    console.log('orderOption=%s', orderOption);

    if(orderOption !== undefined && orderOption !== null) {
      this.setState({
        sortOrderState: orderOption,
      })
    }
  }

  initializeMealsByType = (meals, sortOrder, ...args) => {
    let mealsByType = {};
    // loop through the list of meals
    for(let i = 0; i < meals.length; i++) {
      let meal = meals[i];
      // Get the type by the typeName parameter(s)
      let type = sortOrder === sortingOrderStates.CUISINE_TYPE ?  meal[args[0]][args[1]] : meal[args[0]];
      // if object does not have property with key of the type name, add it
      switch(sortOrder) {
        // TODO - sorting by price, but eventually will need to filter out prices as well
        // case sortingOrderStates.PRICE:
        //   const maxPrice = typeArgs[1];
        //   break;
        default:
          if(!mealsByType.hasOwnProperty(type)) {
            mealsByType[type] = [];
          }
          break;
      }
      // push meal into the array for this  type
      mealsByType[type].push(meal);
    }

    return mealsByType;
  };

  pushMealCardsToList = (objects) => {
    let list = [];
    // loop through the keys of the object
    for(var keyName in objects) {
      if (objects.hasOwnProperty(keyName)) {
        let listByType = objects[keyName];
        console.log(keyName);
        console.log(listByType);
        // push a slider containing the meals of this cuisine type onto the list
        list.push(
          <div className="meal-list">
            <h2>{keyName}</h2>
            <Slider {...mealCardSliderSettings}>
              {
                listByType.map(meal => {
                  let mealCard =
                    <
                      MealCard
                      key={meal.id}
                      {...meal}
                      cuisineType={meal.cuisineType}
                    />;
                  // console.log(mealCard);
                  return mealCard;
                })
              }
            </Slider>
          </div>
        );
      }
    }

    return list;
  };

  render() {
    const { loader, meals, sortOrderState } = this.state;
    console.log('sortOrderState=%s', sortOrderState);

    let isLoading = true;

    var mealList;

    const userContext = this.context;
    console.log("HOME - context={userId: %s, authorized: %s}", userContext.userId, userContext.authorized);

    if(!loader) {
      switch(sortOrderState) {
        default:
        case sortingOrderStates.CUISINE_TYPE:
          /*
           * {
           *    Keto: [{meal...}, ...],
           *    Paleo: [{meal...}, ...],
           *    Vegan: [{meal...}, ...],
           *    Vegetarian: [{meal...}, ...],
           *    Low-Fat: [{meal...}, ...],
           * }
           */
          const cuisines = this.initializeMealsByType(meals, sortOrderState, "Cuisine", "cuisineType");
          const cuisineList = this.pushMealCardsToList(cuisines);

          mealList = cuisineList;
          break;
        case sortingOrderStates.DIET_TYPE:
          const mealsByDietType = this.initializeMealsByType(meals, sortOrderState, 'dietType');
          const dietTypeCardComponents = this.pushMealCardsToList(mealsByDietType);

          mealList = dietTypeCardComponents;
          break;
        case sortingOrderStates.CALORIES:
          mealList = 'CALORIES_PLACEHOLDER';
          break;
        case sortingOrderStates.PRICE.ASCENDING:
          const mealsByAscendingPrice = this.initializeMealsByType(meals, sortOrderState, "price");
          const ascendingPriceCardComponents = this.pushMealCardsToList(mealsByAscendingPrice);

          mealList = ascendingPriceCardComponents;
          break;
        case sortingOrderStates.PRICE.DESCENDING:
          const mealsByDescendingPrice = this.initializeMealsByType(meals, sortOrderState, "price");
          const descendingPriceCardComponents = this.pushMealCardsToList(mealsByDescendingPrice);

          mealList = descendingPriceCardComponents;
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
                });
              }}
              color="inherit"
            >Cuisine Type</Button>
            <Button
              variant="outlined"
              onClick={() => {
                localStorage.setItem('sortOrder', sortingOrderStates.DIET_TYPE);
                this.setState({
                  sortOrderState: sortingOrderStates.DIET_TYPE
                });
              }}
              color="inherit"
            >Diet Type</Button>
            <Button
              variant="outlined"
              onClick={() => {
                localStorage.setItem('sortOrder', sortingOrderStates.CALORIES);
                this.setState({
                  sortOrderState: sortingOrderStates.CALORIES
                });
              }}
              color="inherit"
            >Calories</Button>
            <Button
              variant="outlined"
              onClick={() => {
                localStorage.setItem('sortOrder', sortingOrderStates.PRICE.ASCENDING);
                this.setState({
                  sortOrderState: sortingOrderStates.PRICE.ASCENDING
                });
              }}
              color="inherit"
            >Price Ascending</Button>
            <Button
              variant="outlined"
              onClick={() => {
                localStorage.setItem('sortOrder', sortingOrderStates.PRICE.DESCENDING);
                this.setState({
                  sortOrderState: sortingOrderStates.PRICE.DESCENDING
                });
              }}
              color="inherit"
            >Price Descending</Button>
          </ButtonGroup>
        </div>
        <div>
          {
            !isLoading ? mealList : <Spinner />
          }
        </div>
      </div>
    );
  }
}
export default Home;