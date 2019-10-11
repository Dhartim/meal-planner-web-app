import React, { Component } from "react";
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import './mealCard.css'

class FrontCard extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          
        };
      }
    render(){
        const meal = this.props.meal;

        return (
            <Card >
                <CardHeader
                    title={meal.dishName}
                />
                <CardMedia
                    className = {"cardMedia"}
                    image={meal.imgUrl}
                    title={meal.dishName}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Pizza will be in Keto Diet  
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        );
    }
}
export default FrontCard;