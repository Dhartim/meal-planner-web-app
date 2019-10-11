import React, { Component } from "react";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './mealCard.css';
import { Card } from "@material-ui/core";

export class BackCard extends Component{
    render(){
        const meal = this.props.meal;
        return(
            <Card>
                <CardContent>
                    <Typography variant="subtitle1" color="textPrimary" component="sub">
                    Cuisine : Vegetarian {/*comes from database*/}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
export default BackCard;