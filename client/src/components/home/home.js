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
import './home.css'

import { sortingOrderStates } from '../../routes/index'

const mealCardSliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3
};

export class Home extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    const orderOption = localStorage.getItem('sortOrder');
    this.state = {
      meals: [],
      homeMealSortOrder: orderOption,
      loader: true,
      loader2: true,
    }
  }

  componentDidMount(){
    const userContext = this.context;
    const token = localStorage.getItem('jwtToken');
    const orderOption = localStorage.getItem('sortOrder');

    //console.log('did mount? orderOption=%s', orderOption);

    userContext.changeSortOrder(orderOption);
    this.setState({
      homeMealSortOrder: orderOption
    });


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

    // console.log('did mount? orderOption=%s', orderOption);
    //
    // userContext.changeSortOrder(orderOption);
    // this.setState({
    //   homeMealSortOrder: orderOption !== undefined && orderOption !== null ? orderOption : sortingOrderStates.CUISINE_TYPE,
    // })
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
        // console.log(keyName);
        // console.log(listByType);
        // push a slider containing the meals of this cuisine type onto the list
        list.push(
            <div key={keyName} className="meal-list">
              <h2>{keyName}</h2>
              <Slider {...mealCardSliderSettings}>
                {
                  listByType.map(meal => {
                    return (
                        <
                            MealCard
                            key={meal.id}
                            {...meal}
                            cuisineType={meal.cuisineType}
                        />
                    );
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
    const { loader, meals, homeMealSortOrder } = this.state;
   // console.log('homeMealSortOrder=%s', homeMealSortOrder);

    let isLoading = true;

    var mealList;

    const userContext = this.context;
    //console.log("HOME - context={userId: %s, authorized: %s}", userContext.userId, userContext.authorized);

    if(!loader) {
      switch(homeMealSortOrder) {
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
          const cuisines = this.initializeMealsByType(meals, homeMealSortOrder, "Cuisine", "cuisineType");
          const cuisineList = this.pushMealCardsToList(cuisines);

          mealList = cuisineList;
          break;
        case sortingOrderStates.DIET_TYPE:
          const mealsByDietType = this.initializeMealsByType(meals, homeMealSortOrder, 'dietType');
          const dietTypeCardComponents = this.pushMealCardsToList(mealsByDietType);

          mealList = dietTypeCardComponents;
          break;
        case sortingOrderStates.CALORIES:
          mealList = 'CALORIES_PLACEHOLDER';
          break;
        case sortingOrderStates.PRICE.ASCENDING:
          const mealsByAscendingPrice = this.initializeMealsByType(meals, homeMealSortOrder, "price");
          const ascendingPriceCardComponents = this.pushMealCardsToList(mealsByAscendingPrice);

          mealList = ascendingPriceCardComponents;
          break;
        case sortingOrderStates.PRICE.DESCENDING:
          const mealsByDescendingPrice = this.initializeMealsByType(meals, homeMealSortOrder, "price");
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
          <div className={"recs-container"}>
            <h2>Recommendations</h2>
            <Recommendations />
          </div>
          <hr className={"page-hr"}/>
          <div className={"button-container"}>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
              <Button
                  variant="outlined"
                  onClick={() => {
                    userContext.changeSortOrder(sortingOrderStates.CUISINE_TYPE);
                    localStorage.setItem('sortOrder', sortingOrderStates.CUISINE_TYPE);
                    this.setState({
                      homeMealSortOrder: userContext.homeMealSortOrder
                    });
                    // this.forceUpdate();
                    window.location.reload();
                  }}
                  color="inherit"
              >Cuisine Type</Button>
              <Button
                  variant="outlined"
                  onClick={() => {
                    userContext.changeSortOrder(sortingOrderStates.DIET_TYPE);
                    localStorage.setItem('sortOrder', sortingOrderStates.DIET_TYPE);
                    this.setState({
                      homeMealSortOrder: userContext.homeMealSortOrder,
                    });
                    // this.forceUpdate();
                    window.location.reload();
                  }}
                  color="inherit"
              >Diet Type</Button>
              <Button
                  variant="outlined"
                  onClick={() => {
                    localStorage.setItem('sortOrder', sortingOrderStates.CALORIES);
                    this.setState({
                      homeMealSortOrder: sortingOrderStates.CALORIES
                    });
                  }}
                  color="inherit"
              >Calories</Button>
              <Button
                  variant="outlined"
                  onClick={() => {
                    localStorage.setItem('sortOrder', sortingOrderStates.PRICE.ASCENDING);
                    this.setState({
                      homeMealSortOrder: sortingOrderStates.PRICE.ASCENDING
                    });
                  }}
                  color="inherit"
              >Price Ascending</Button>
              <Button
                  variant="outlined"
                  onClick={() => {
                    localStorage.setItem('sortOrder', sortingOrderStates.PRICE.DESCENDING);
                    this.setState({
                      homeMealSortOrder: sortingOrderStates.PRICE.DESCENDING
                    });
                  }}
                  color="inherit"
              >Price Descending</Button>
            </ButtonGroup>
          </div>
          <div className={'cuisine-list'}>
            {
              !isLoading ? mealList : <Spinner />
            }
          </div>
        </div>
    );
  }
}
export default Home;