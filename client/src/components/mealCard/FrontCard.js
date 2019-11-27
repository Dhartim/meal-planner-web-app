import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { OverlayTrigger, Form } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip'                                    
import MealDetailModal from './MealDetailModal';
import FavouriteButton from "./FavouriteButton";

export class FrontCard extends Component{
    state = { checked: false }
    
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })
    
    render(){
        const meal = this.props.meal;
        // console.log("Meals = " , this.props);
        const renderTooltipTemp = (
            <Tooltip id="tooltip-right-start">
              <div>
                    Prep-Time:{meal.prepTime} <br/>
                    Cook-Time: {meal.cookTime}<br/>
                    Calories: {meal.Nutrition.calories}<br/>
                    Fat: {meal.Nutrition.totalFat}<br/>
                    Protein: {meal.Nutrition.protein}<br/>
                    Carbs: {meal.Nutrition.totalCarbohydrates}<br/>
                </div>
            </Tooltip>
        );

        let mealDesc;
        let limit = 230;
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
                    <hr className={"card-divider"}/>
                    <Card.Text>
                        <div className={"meal-desc"}>
                            {mealDesc}
                        </div>
                    </Card.Text>
                    <Card.Text>
                        Prep time : {meal.prepTime}
                    </Card.Text>
                    <Form>
                        {['checkbox'].map(type => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`I ate it`}
                            />
                            </div>
                        ))}
                    </Form>
                    <div className="favourite-block">
                        <FavouriteButton meal_id={meal.id} favorites={meal.favorites}/>
                    </div>
                    <MealDetailModal meal= {meal}/>
                </Card.Body>
            </Card>
        );
    }
}
export default FrontCard;