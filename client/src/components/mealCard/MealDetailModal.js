import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

import './mealCard.css';
import Card from "react-bootstrap/Card";


function MealDetailModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const meal = props.meal;
    return (
        <div className="meal-details-block">
            <Button variant="primary" onClick={handleShow}>
                More Details
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{meal.dishName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="top-block">
                        <div className="image-block">
                            <img src={meal.imgUrl} className="img-responsive" alt=""/>
                        </div>
                        <div className="content-block">
                            <h6>{meal.prepTime} to prep</h6>
                        </div>
                    </div>
                    <div className="description-block">
                        <div className="info-block-1">
                            <div className="row">
                                <div class="col-sm-9">
                                <h5>Nutrition Info</h5>
                                    <div class="row">
                                    {/* TODO :// any better way to retrieve these data from db  */}
                                    <div className="col-6 col-sm-6">
                                        Calories:{meal.Nutrition.calories}<br/>
                                        Total Fat: {meal.Nutrition.totalFat}<br/>
                                        Saturated Fat:{meal.Nutrition.saturatedFat}<br/>
                                        Cholestrol: {meal.Nutrition.cholesterol}<br/>
                                        Sodium: {meal.Nutrition.sodium} <br/>
                                        Total Carb: {meal.Nutrition.totalCarbohydrates}<br/>
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        Fiber: {meal.Nutrition.fiber} <br/>
                                        Sugar: {meal.Nutrition.sugar} <br/>
                                        Protein: {meal.Nutrition.protein}<br/>
                                        Vitamins & Minerals:  {meal.Nutrition.vitaminsAndMinerals}<br/>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-block-2">
                            <h5>Recipe</h5>
                            <p>{meal.recipe}</p>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default MealDetailModal;