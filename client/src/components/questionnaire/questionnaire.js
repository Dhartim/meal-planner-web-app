import React, { Component } from "react"

import RadioGroup from '../subcomponents/radioGroup';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import axios from "axios";
import "./questionnaire.css";

export class Questionnaire extends Component {
  constructor(props) {
    super(props);

    this.state = {
      diet: "",
      calories: "",
      fat: "",
      protein: "",
      carbs: "",
      weight: "",
      desiredWeight: "",
      mealCount: "",
      priceLimit: "",
    }
  }

  createPreferences = () => {

    const jwtToken = localStorage.getItem('jwtToken');
    console.log("CREATE PREFERENCES");
    const {
      diet,
      calories,
      fat,
      protein,
      carbs,
      weight,
      desiredWeight,
      mealCount,
      priceLimit
    } = this.state;
    return axios.post('/preferences', {
      diet: diet,
      calories: parseInt(calories, 10),
      fat: parseInt(fat, 10),
      protein: parseInt(protein, 10),
      carbs: parseInt(carbs, 10),
      weight: parseInt(weight, 10),
      desiredWeight: parseInt(desiredWeight, 10),
      mealCount: parseInt(mealCount, 10),
      priceLimit: priceLimit === "No Limit" ? parseInt(100, 10) : parseInt(priceLimit, 10)
    },
      {
        headers: { "x-access-token": `${jwtToken}` }
      }).then(this.props.history.push('/dashboard'))
      .catch(err => {
        console.log(err)
      })
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  onRadioClick(type, selection) {
    console.log('type:', type)
    this.setState({
      [type]: selection
    })
  }

  render() {
    return (
      <Container component="main" maxWidth="sm">
        <div>
          <div className={"heading-container"}>
            <h2>Tell us a little more about yourself:</h2>
          </div>
          <div className={"form-container"}>
            <form>
              <div className="radio-label__container">
                <label htmlFor="diet">Diet</label>
                <RadioGroup
                  radio={[
                    { id: "diet", name: "diet", value: "vegan", onClick: this.onRadioClick.bind(this, 'diet', 'price') },
                    { id: "diet", name: "diet", value: "vegetarian", onClick: this.onRadioClick.bind(this, 'diet', 'vegetarian') },
                    { id: "diet", name: "diet", value: "paleo", onClick: this.onRadioClick.bind(this, 'diet', 'paleo') },
                    { id: "diet", name: "diet", value: "keto", onClick: this.onRadioClick.bind(this, 'diet', 'keto') },
                    { id: "diet", name: "diet", value: "anything", onClick: this.onRadioClick.bind(this, 'diet', 'anything') },
                  ]}
                />
              </div>
              <div className="form-text__container">
                <div className="form-control">
                  <label htmlFor="calories">Calories</label>
                  <input type="number" value={this.state.calories} onChange={this.handleChange.bind(this)} id="calories" placeholder="Enter Calorie Goal" />
                </div>
                <div className="form-control">
                  <label htmlFor="fat">Fat</label>
                  <input type="number" value={this.state.fat} onChange={this.handleChange.bind(this)} id="fat" placeholder="Enter Fat in grams" />
                </div>
                <div className="form-control">
                  <label htmlFor="protein">Protein</label>
                  <input type="number" value={this.state.protein} onChange={this.handleChange.bind(this)} id="protein" placeholder="Enter Protein in grams" />
                </div>
                <div className="form-control">
                  <label htmlFor="carbs">Carbs</label>
                  <input type="number" value={this.state.carbs} onChange={this.handleChange.bind(this)} id="carbs" placeholder="Enter Carbs in grams" />
                </div>
                <div className="form-control">
                  <label htmlFor="weight">Weight</label>
                  <input type="number" value={this.state.weight} onChange={this.handleChange.bind(this)} id="weight" placeholder="Enter lbs" />
                </div>
                <div className="form-control">
                  <label htmlFor="desiredWeight">Desired Weight</label>
                  <input type="number" value={this.state.desiredWeight} onChange={this.handleChange.bind(this)} id="desiredWeight" placeholder="Enter Desired lbs" />
                </div>
              </div>
              <div className="radio-label__container">
                <label htmlFor="freq">Daily Meal Frequency</label>
                <RadioGroup
                  radio={[
                    { id: "mealCount", name: "mealCount", value: "1", onClick: this.onRadioClick.bind(this, 'mealCount', '1') },
                    { id: "mealCount", name: "mealCount", value: "2", onClick: this.onRadioClick.bind(this, 'mealCount', '2') },
                    { id: "mealCount", name: "mealCount", value: "3", onClick: this.onRadioClick.bind(this, 'mealCount', '3') },
                    { id: "mealCount", name: "mealCount", value: "4", onClick: this.onRadioClick.bind(this, 'mealCount', '4') },
                    { id: "mealCount", name: "mealCount", value: "5", onClick: this.onRadioClick.bind(this, 'mealCount', '5') },
                  ]}
                />
              </div>
              <div className="radio-label__container">
                <label htmlFor="priceLimit">Price Limit</label>
                <RadioGroup
                  radio={[
                    { id: "price", name: "price", value: "<$5", onClick: this.onRadioClick.bind(this, 'priceLimit', '5') },
                    { id: "price", name: "price", value: "<$10", onClick: this.onRadioClick.bind(this, 'priceLimit', '10') },
                    { id: "price", name: "price", value: "<$15", onClick: this.onRadioClick.bind(this, 'priceLimit', '15') },
                    { id: "price", name: "price", value: "No Limit", onClick: this.onRadioClick.bind(this, 'priceLimit', 'No Limit') },
                  ]}
                />
              </div>
              <div className={"button-container-q"}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    this.createPreferences().then(window.location.reload());
                  }}
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    )
  }
}

export default Questionnaire;