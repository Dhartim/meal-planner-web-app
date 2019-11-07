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
        var { meal_id } = this.state; //this meal id is incorrect
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
            listOfIngredients: res.data // cant update this, dont know why ???
            })
        })
        .catch(error => error)
        console.log("ingredients = " , this.state.listOfIngredients);
     }
    render(){
        return(
            <div className= "row">
                <div className ="col-6 col-sm-6">

                    {/* will pull ingredients from db once api is ready */}
                    {/* display ingredients here frrom db */}
                </div>
                <div className ="col-6 col-sm-6">
                    {/* pull quantity from db */}
                    {/* it will have measurement or quantity of ingredients  */}
                </div>
                <div className ="col-12 col-sm-12">
                {/* send an email with ingredients and price to user */}
                    <Button><FaCartPlus/> Buy Ingredients</Button>
                </div>
            </div>
            
        );
    }
}

export default Ingredients;