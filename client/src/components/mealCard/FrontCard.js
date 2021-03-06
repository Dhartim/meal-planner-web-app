import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { OverlayTrigger, Form } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip'
import MealDetailModal from './MealDetailModal';
import FavouriteButton from "./FavouriteButton";
import UserAteButton from "./UserAteButton";

export class FrontCard extends Component {
  render() {
    const meal = this.props.meal;
    const renderTooltipTemp = (
      <Tooltip id="tooltip-right-start">
        <div>
          Prep-Time:{meal.prepTime} <br />
          Cook-Time: {meal.cookTime}<br />
          Calories: {meal.Nutrition.calories}<br />
          Fat: {meal.Nutrition.totalFat}<br />
          Protein: {meal.Nutrition.protein}<br />
          Carbs: {meal.Nutrition.totalCarbohydrates}<br />
        </div>
      </Tooltip>
    );

    let mealDesc;
    let limit = 215;
    if (meal.desc.length > limit) {
      mealDesc = meal.desc.substring(0, limit) + "..."
    } else {
      mealDesc = meal.desc
    }
    return (
      <Card>
        <OverlayTrigger
          key="right-start"
          placement="right-start"
          overlay={renderTooltipTemp}
        >
          <Card.Img variant="top" src={meal.imgUrl} />
        </OverlayTrigger>
        <Card.Body>
          <Card.Title>{meal.dishName}</Card.Title>
          <hr className={"card-divider"} />
          <Card.Text>
            <div className={"meal-desc"}>
              {mealDesc}
            </div>
          </Card.Text>
          <Card.Text>
            Prep time : {meal.prepTime}
          </Card.Text>
          <UserAteButton meal_id={meal.id} />
          <div className="favourite-block">
            <FavouriteButton meal_id={meal.id} favorites={meal.favorites} />
          </div>
          <MealDetailModal meal={meal} />
        </Card.Body>
      </Card>
    );
  }
}
export default FrontCard;