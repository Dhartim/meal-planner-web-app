import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import { Card, Checkbox, CardHeader } from "@material-ui/core";
// import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import IconButton from '@material-ui/core/IconButton';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
// import Tooltip from '@material-ui/core/Tooltip';
// import Grid from '@material-ui/core/Grid';
import { OverlayTrigger, Form } from "react-bootstrap";
export class FrontCard extends Component{
    state = { checked: false }
    
    handleCheckboxChange = event =>
      this.setState({ checked: event.target.checked })
    
    render(){
        const meal = this.props.meal;
        const renderTooltip = props => (
            <div
              {...props}
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                padding: '2px 10px',
                color: 'white',
                borderRadius: 3,
                ...props.style,
              }}
            >
            {/* //following things will come from db */}
            Prep-Time:{meal.prepTime} <br/>
            Calories: 90 <br/>
            Fat: 30<br/>
            Protein: 30<br/>
            Carbs: 30<br/>
            </div>
        );
       // const longTitle = meal.prepTime;
        console.log(meal);
        return ( 
            <Card style={{ width: '18rem' }}>
                <OverlayTrigger
                    placement="right-start"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <Card.Img variant="top" src={meal.imgUrl} />
                </OverlayTrigger>
                <Card.Body>
                    <Card.Title>{meal.dishName}</Card.Title>
                    <Card.Text>
                        {meal.cuisineType}<br />
                        Preptime : {meal.prepTime}
                    </Card.Text>
                    <Form>
                        {['checkbox'].map(type => (
                            <div key={`default-${type}`} className="mb-3">
                            <Form.Check 
                                type={type}
                                id={`default-${type}`}
                                label={`I ate it`}
                            />
                            </div>
                        ))}
                    </Form>
                    <Button variant="primary">More Details</Button>
                </Card.Body>
            </Card>
            // favourite icon and component on click of button remaining
            //size of card container
        );
    }
}
export default FrontCard;