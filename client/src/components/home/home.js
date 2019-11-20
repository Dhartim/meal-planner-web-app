import React, {Component} from 'react';
import axios from 'axios';
import Spinner from '../subcomponents/spinner'

import {UserContext} from "../../context/usercontext";
import Recommendations from "../recommendations";
import {Button, ButtonGroup} from "@material-ui/core";
import MealCard from "../mealCard";
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

// const dietType = {
//   VEGETARIAN: 'Vegetarian',
//   VEGAN: 'Vegan',
//   KETO: 'Keto',
//   PALEA: 'Paleo',
//   LOW_FAT: 'Low-Fat',
// };

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
    // axios
    //   .get('/cuisines')
    //   .then(res => {
    //     this.setState({
    //       cuisines: res.data,
    //       loader: false
    //     })
    //   })
    //   .catch(error => {
    //     console.log("Error = %s", error);
    //   })
  }

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
          let cuisines = [];
          let cuisineList = {};

          for(let i = 0; i < meals.length; i++) {
            let meal = meals[i];
            let cuisineType = meal.Cuisine.cuisineType;
            if(cuisineList[cuisineType] === undefined || cuisineList[cuisineType] === null) {
              cuisineList[cuisineType] = [];
            }
            cuisineList[cuisineType].push(meal);

            // cuisineList[cuisineType].forEach(list => {
            //   console.log(list);
            // });
            // console.log(cuisineList);
          }

          for(var cuisineType in cuisineList) {
            if (cuisineList.hasOwnProperty(cuisineType)) {
              let listByType = cuisineList[cuisineType];
              console.log(cuisineType);
              console.log(listByType);
              cuisines.push(
                <div className="meal-list">
                  <h2>{cuisineType}</h2>
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

          console.log("cuisines");
          console.log(cuisines);

          mealList = cuisines;
          break;
        case sortingOrderStates.DIET_TYPE:
          let dietTypeCardComponents = [];
          let mealsByDietType = {};

          for(let i = 0; i < meals.length; i++) {
            let meal = meals[i];
            let dietType = meal.dietType;
            if(mealsByDietType[dietType] === undefined || mealsByDietType[dietType] === null) {
              mealsByDietType[dietType] = [];
            }
            mealsByDietType[dietType].push(meal);
          }

          for(var dietType in mealsByDietType) {
            if(mealsByDietType.hasOwnProperty(dietType)) {
              let listByType = mealsByDietType[dietType];
              console.log(dietType);
              console.log(listByType);
              dietTypeCardComponents.push(
                <div className="meal-list">
                  <h2>{dietType}</h2>
                  <Slider {...mealCardSliderSettings}>
                    {
                      listByType.map(meal => {
                        // console.log(mealCard);
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

          // for(let i = 0; i < meals.length; i++) {
          //   let meal = meals[i];
          //   console.log("meal.dietType=%s", meal.dietType);
          //   mealsByDietType[meal.dietType].push(meal);
          //   // console.log("favorite[%d]={dishName: %s\nnutritionInfo: %s\nimgUrl: %s\nprepTime: %s\ncookTime: %s\nrecipe: %s\ncuisineId: %s\ncuisineType: %s\n}", i,
          //   //   favorite.dishName,
          //   //   favorite.nutritionInfo,
          //   //   favorite.imgUrl,
          //   //   favorite.prepTime,
          //   //   favorite.cookTime,
          //   //   favorite.recipe,
          //   //   favorite.cuisineId);
          //
          //   // mealsByDietType.push(
          //   //   <Slider {...mealCardSliderSettings}>
          //   //     {
          //   //       props.meals.map(meal =>
          //   //         <
          //   //           MealCard
          //   //           key={meal.id}
          //   //           {...meal }
          //   //           cuisineType = {meal.cuisineType}
          //   //         />
          //   //       )}
          //   //   </Slider>
          //   // )
          // }
          console.log(dietTypeCardComponents);
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

          mealList = dietTypeCardComponents;
          break;
        case sortingOrderStates.CALORIES:
          mealList = 'CALORIES_PLACEHOLDER';
          break;
        case sortingOrderStates.PRICE.ASCENDING:
          mealList = 'PRICE_ASCENDING_PLACEHOLDER';
          break;
        case sortingOrderStates.PRICE.DESCENDING:
          mealList = 'PRICE_DESCENDING_PLACEHOLDER';
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