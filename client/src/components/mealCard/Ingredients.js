import React from "react";
import Button from 'react-bootstrap/Button';
import './mealCard.css';

function Ingredients(){
    return(
        <div className= "row">
            <div className ="col-6 col-sm-6">
                will pull ingredients from db once api is ready
                {/* display ingredients here frrom db */}
            </div>
            <div className ="col-6 col-sm-6">
                pull quantity from db
                {/* it will have measurement or quantity of ingredients  */}
            </div>
            <div className ="col-12 col-sm-12">
            {/* connect this button to amazon fresh api */}
                <Button variant="success">
                    <img className = "imageStyle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMc3cMTCxTnwEOHmag0jHwyuVXNkcNluT9NjOjrAZtnS_LHax&s" alt="" />
                    Buy Ingredients {/*need to have space between image and text*/}
                </Button> 
            </div>
        </div>
        
    );
}

export default Ingredients;