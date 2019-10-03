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
export class FrontCard extends Component{
    render(){
        return (
            <Card >
                <CardHeader
                    title="Pizza"
                />
                <CardMedia
                    className = {"cardMedia"}
                    image="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-salami-close-up.jpg"
                    title="Pizza"
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