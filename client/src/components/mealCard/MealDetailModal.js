import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import './mealCard.css';
import { FaRegHeart, FaRegTrashAlt } from "react-icons/fa";


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
                    <div className="action-block">
                        <ul>
                            <li>
                                <FaRegHeart />
                            </li>
                            <li>
                                <FaRegTrashAlt />
                            </li>
                        </ul>
                    </div>
                    <div className="description-block">
                        <div className="info-block-1">
                            <h5>Nutrition Info</h5>
                            <p>{meal.nutritionInfo}</p>
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