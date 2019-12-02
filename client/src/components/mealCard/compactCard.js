import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

import './compactCard.css'

export class CompactCard extends Component {
    render() {
        const meal = this.props.meal;

        return (
            <Card>
                <img className={"compact-card"} src={meal.imgUrl}/>
                <div className={"compact-card"}>
                    {meal.dishName}
                </div>
                <div>
                    <Button>Details</Button>
                </div>
            </Card>
        )
    }
}

export default CompactCard;