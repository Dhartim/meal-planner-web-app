import React, { Component } from "react";
import CardMedia from '@material-ui/core/CardMedia';
import { Card, Checkbox, CardHeader } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import './mealCard.css'
export class FrontCard extends Component{
    state = { checked: false }
    
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })
    
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
                    <Typography variant="h5" component="h2">
                        {meal.dishName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cuisine Type: { meal.cuisineType } 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Servings: 2
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                    </IconButton>
                    <Checkbox
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}
                    />
                    <span>I ate it</span>
                </CardActions>
            </Card>
        );
    }
}
export default FrontCard;