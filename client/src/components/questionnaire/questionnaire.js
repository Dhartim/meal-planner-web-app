import React, { Component } from "react"

import RadioGroup from '../radioGroup';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }


  render() {
    return(
      <Container component="main" maxWidth="sm">
        <div>
          <form>
            <div className="radio-label__container">
              <label htmlFor="diet">Diet</label>
              <RadioGroup
                radio={[
                  {id: "diet", name: "diet", value: "vegan"},
                  {id: "diet", name: "diet", value: "vegetarian"},
                  {id: "diet", name: "diet", value: "paleo"},
                  {id: "diet", name: "diet", value: "keto"},
                  {id: "diet", name: "diet", value: "anything"},
                ]}
              />
            </div>
            <div className="form-text__container">
              <div className="form-control">
                <label htmlFor="macros">Macros</label>
                <input type="number" id="macros" placeholder="Enter Calorie Goal"/>
              </div>
              <div className="form-control">
                <label htmlFor="fat">Fat</label>
                <input type="number" id="fat" placeholder="Enter Fat in grams"/>
              </div>
              <div className="form-control">
                <label htmlFor="protein">Protein</label>
                <input type="number" id="protein" placeholder="Enter Protein in grams"/>
              </div>
              <div className="form-control">
                <label htmlFor="carbs">Carbs</label>
                <input type="number" id="carbs" placeholder="Enter Carbs in grams"/>
              </div>
              <div className="form-control">
                <label htmlFor="weight">Weight</label>
                <input type="number" id="weight" placeholder="Enter lbs"/>
              </div>
              <div className="form-control">
                <label htmlFor="desiredWeight">Desired Weight</label>
                <input type="number" id="desiredWeight" placeholder="Enter Desired lbs"/>
              </div>
            </div>
            <div className="radio-label__container">
              <label htmlFor="freq">Daily Meal Frequency</label>
              <RadioGroup
                radio={[
                  {id: "mealCount", name: "mealCount", value: "1"},
                  {id: "mealCount", name: "mealCount", value: "2"},
                  {id: "mealCount", name: "mealCount", value: "3"},
                  {id: "mealCount", name: "mealCount", value: "4"},
                  {id: "mealCount", name: "mealCount", value: "5"},
                ]}
              />
            </div>
            <div className="radio-label__container">
              <label htmlFor="priceLimit">Price Limit</label>
              <RadioGroup
                radio={[
                  {id: "price", name: "price", value: "<$5"},
                  {id: "price", name: "price", value: "<$10"},
                  {id: "price", name: "price", value: "<$15"},
                  {id: "price", name: "price", value: "No Limit"},
                ]}
              />
            </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                this.props.history.push('/');
                window.location.reload();
              }}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Container>
    )
  }
}

export default Questionnaire;