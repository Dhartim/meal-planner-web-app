import React from "react";
import Button from 'react-bootstrap/Button';
import {FaCartPlus} from "react-icons/fa";
import axios from 'axios';
import './mealCard.css';

class Ingredients extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            meal_id: this.props.meal_id,
            listOfIngredients: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
      }
     componentDidMount(){
        const token = localStorage.getItem('jwtToken');
        var { meal_id } = this.state; 
        console.log("MEAL ID FOR INGREDIENTS = ", meal_id);
        console.log(`/api/ingredients/${meal_id}`);
        axios
        .get(`/ingredients/${meal_id}`,
        {
            headers: {
              'x-access-token': token
            }
        })
        .then(res => {
            this.setState({
            listOfIngredients: res.data 
            })
        })
        .catch(error => error)
    }

    render(){
        console.log("ingredients = " , this.state.listOfIngredients);
        //got ingredients and quantity from backend 
        const ingredients = this.state.listOfIngredients.map(ingredient => <div>{ingredient.name}</div>);
        const quantity = this.state.listOfIngredients.map(ingredientsQuantity => <div>{ingredientsQuantity.quantity}</div>);
        return(
            <div className= "row">
                <div className ="col-8 col-sm-8">
                    {ingredients}
                </div>
                <div className ="col-4 col-sm-">
                    {quantity}
                </div>
                <div className ="col-12 col-sm-12">
                {/* TODO :// send an email with ingredients and price to user */}
                    <Button><FaCartPlus/> Buy Ingredients</Button>
                </div>
            </div>
            
        );
    }
}

export default Ingredients;