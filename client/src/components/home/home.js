import React, {Component} from 'react';
import axios from 'axios';
import Spinner from '../subcomponents/spinner'

import {Dropdown} from "react-bootstrap";
import {UserContext} from "../../context/usercontext";
import Recommendations from "../recommendations";
import {Button, ButtonGroup} from "@material-ui/core";
import MealCard from "../mealCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import './sliderCards.css';

import { sortingOrderStates } from '../../enums/sortOrder'
import { cuisineType, cuisineTypeList } from '../../enums/cuisineType'
import { dietType, dietTypeList } from '../../enums/dietType'

const mealCardSliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4
};

const dietFilterItems = [];
const cuisineFilterItems = [];

export class Home extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    const orderOption = localStorage.getItem('sortOrder');

    dietTypeList.forEach(type => {
      dietFilterItems.push(
        <Dropdown.Item onClick={() => {
          this.setSort(sortingOrderStates.DIET_TYPE);
          this.setFilter(type);
        }}>{type}</Dropdown.Item>
      );
    });

    cuisineTypeList.forEach(type => {
      cuisineFilterItems.push(
        <Dropdown.Item onClick={() => {
          this.setSort(sortingOrderStates.CUISINE_TYPE);
          this.setFilter(type);
        }}>{type}</Dropdown.Item>
      )
    });

    this.state = {
      meals: [],
      homeMealSortOrder: orderOption,
      filter: dietType.ANYTHING,
      loader: true,
      loader2: true,
    }
  }

  componentDidMount(){
    const userContext = this.context;
    const token = localStorage.getItem('jwtToken');
    const orderOption = localStorage.getItem('sortOrder');

    console.log('did mount? orderOption=%s', orderOption);

    userContext.changeSortOrder(orderOption);
    this.setState({
      homeMealSortOrder: orderOption
    });

    this.initializeFilter();

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

  setSort = (type) => {
    const userContext = this.context;
    userContext.changeSortOrder(type);
    localStorage.setItem('sortOrder', type);
    this.setState({
      homeMealSortOrder: type
    });
    window.location.reload();
  };

  initializeFilter = () => {
    const item = localStorage.getItem('filter');
    const filter = item !== undefined && item !== null ? item : dietType.ANYTHING;
    this.setState({
      filter: filter,
    });
  };

  setFilter = filter => {
    this.setState({
      filter: filter,
    });
    localStorage.setItem('filter', filter);
  };

  initializeMealsByType = (meals, sortOrder, ...args) => {
    const { filter } = this.state;

    let mealsByType = {};
    // loop through the list of meals
    for(let i = 0; i < meals.length; i++) {
      let meal = meals[i];
      // Get the type by the typeName parameter(s)
      let type = sortOrder === sortingOrderStates.CUISINE_TYPE ?  meal[args[0]][args[1]] : meal[args[0]];
      // Filter out headers that aren't being searched for
      if(filter === dietType.ANYTHING || filter === cuisineType.ANYTHING || type === filter) {
        // if object does not have property with key of the type name, add it
        if (!mealsByType.hasOwnProperty(type)) {
          mealsByType[type] = [];
        }
        // push meal into the array for this  type
        mealsByType[type].push(meal);
      }
    }

    return mealsByType;
  };

  pushMealCardsToList = (objects) => {
    const { filter, homeMealSortOrder } = this.state;
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
                listByType
                  .filter(meal => { // Filter out any meals that don't match
                    switch(homeMealSortOrder) {
                      case sortingOrderStates.DIET_TYPE:
                        let validDiet = false;
                        if (filter === dietType.ANYTHING || meal.dietType === filter) {
                          validDiet = true;
                        }
                        return validDiet;
                      case sortingOrderStates.CUISINE_TYPE:
                        let validCuisine = false;
                        if (filter === cuisineType.ANYTHING || meal.Cuisine.cuisineType === filter) {
                          validCuisine = true;
                        }
                        return validCuisine;
                      default:
                        return false;
                    }
                  })
                  .map(meal => {
                    return (
                      <
                        MealCard
                        key={meal.name}
                        {...meal}
                        cuisineType={meal.cuisineType}
                      />
                    );
                  }
                )
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
    console.log('homeMealSortOrder=%s', homeMealSortOrder);

    let isLoading = true;

    var mealList;

    const userContext = this.context;
    console.log("HOME - context={userId: %s, authorized: %s}", userContext.userId, userContext.authorized);

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
        <div>
          <h2>Recommendations</h2>
          <Recommendations />
        </div>
        <div>
          <ButtonGroup color="primary" aria-label="outlined primary button group">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Filter
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <h6>Diet Type</h6>
                {dietFilterItems}
                <h6>Cuisine Type</h6>
                {cuisineFilterItems}
              </Dropdown.Menu>
            </Dropdown>
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