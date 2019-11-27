import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import './mealCard.css';

function MealDetailModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const meal = props.meal;
    // const recipeItems = meal.map((item) => <li>{item}</li>);

    console.log("RECIPE TYPE")
    console.log(meal.recipe.replace("\",", "\"|").replace("{", "").replace("}", ""))
    // console.log(meal.recipe.split("\","))

    return (
        <div className="meal-details-block">
            <Button variant="primary" onClick={handleShow}>
                More Details
            </Button>
            {/* //add styling to modal  */}
            <Modal show={show} onHide={handleClose} className="modalstyle">
                {/*<Modal.Header closeButton>*/}
                {/*</Modal.Header>*/}
                <Modal.Body>
                    <div className="image-block">
                        <img src={meal.imgUrl} className="img-responsive" alt=""/>
                    </div>
                    <div className={"top-block"}>
                        <Modal.Title>{meal.dishName}</Modal.Title>
                        <hr className={"card-divider"}/>
                        <div className="content-block">
                            <h6>Prep Time: {meal.prepTime}</h6>
                        </div>
                    </div>
                    <div className="description-block">
                        <div className="info-block-1">
                            <div className="row">
                                <div className="col-sm-9">
                                    <h5>Nutrition Info</h5>
                                    <div className="row">
                                        {/* TODO :// any better way to retrieve these data from db  */}
                                        <div className="col-6 col-sm-6 card-text">
                                            Calories:{meal.Nutrition.calories}<br/>
                                            Total Fat: {meal.Nutrition.totalFat}<br/>
                                            Saturated Fat:{meal.Nutrition.saturatedFat}<br/>
                                            Cholestrol: {meal.Nutrition.cholesterol}<br/>
                                            Sodium: {meal.Nutrition.sodium} <br/>
                                            Total Carb: {meal.Nutrition.totalCarbohydrates}<br/>
                                        </div>
                                        <div className="col-6 col-sm-6 card-text">
                                            Fiber: {meal.Nutrition.fiber} <br/>
                                            Sugar: {meal.Nutrition.sugar} <br/>
                                            Protein: {meal.Nutrition.protein}<br/>
                                            Vitamins & Minerals: {meal.Nutrition.vitaminsAndMinerals}<br/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info-block-2">
                            <h5>Recipe</h5>
                            <p className={"card-text"}>{meal.recipe}</p>
                            {/*<ul>*/}
                            {/*    {meal.recipe.map(function(m) {*/}
                            {/*        return (<li>{m}</li>)*/}
                            {/*    })}*/}
                            {/*</ul>*/}
                            {/*<ul>*/}
                            {/*    {recipeItems}*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default MealDetailModal;