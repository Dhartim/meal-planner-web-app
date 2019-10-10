import React, { Component } from "react";
import CardMedia from '@material-ui/core/CardMedia';
import { Card, Checkbox } from "@material-ui/core";
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
        return (
            <Card>
                <CardMedia
                    className = {"cardMedia"}
                    image="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-salami-close-up.jpg"
                    title="Pizza"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Pizza {/*get title from database*/}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cuisine Type 
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Servings : 2
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