import React from "react";
import Button from 'react-bootstrap/Button';
import {FaCartPlus} from "react-icons/fa";
import './mealCard.css';

class Ingredients extends React.Component {
    //get ingredients of each meal and display it 
    // have button to buy ingredients
    //show prices of ingredients with respect to their location
        // ask to enter zip code // location
        //display price of each ingredients
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
                    {/* connect this to an api which gives price and ingredients according to location */}
                    <Button>Buy Ingredients</Button>
                </div>
            </div>
            
        );
    }
}

export default Ingredients;