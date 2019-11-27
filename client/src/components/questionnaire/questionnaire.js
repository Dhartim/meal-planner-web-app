import React, { Component } from "react"

import RadioGroup from '../subcomponents/radioGroup';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Axios from "axios";
import "./questionnaire.css";

export class Questionnaire extends Component {
    constructor(props) {
        super(props);

        this.state = {
            diet: '',
            calories:'',
            fat:'',
            protein:'',
            carbs:'',
            weight:'',
            desiredWeight:'',
            mealCount:'',
            priceLimit:''
        }
    }

    createPreferences = () => {
        console.log("CREATE PREFERENCES");
        const jwtToken = localStorage.getItem('jwtToken');
        console.log(jwtToken)

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

        return Axios.post('/preferences', {
                    // userId: userId,
                    diet: diet,
                    calories: calories,
                    fat: fat,
                    protein: protein,
                    carbs: carbs,
                    weight: weight,
                    desiredWeight: desiredWeight,
                    mealCount: mealCount,
                    priceLimit: priceLimit
                },
         { headers: {"x-access-token" : `${jwtToken}`}
            })
            .then(res => {
                console.log("RES " + res);
            })
            .catch(err => {
                console.log("ERROR " + err);
            })
    };

    handleChange (event) {
        console.log(event.target.id);
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        console.log('hello')
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
                                <label htmlFor="calories">Calories</label>
                                <input type="number" value={this.state.calories} onChange={this.handleChange.bind(this)} id="calories" placeholder="Enter Calorie Goal"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="fat">Fat</label>
                                <input type="number" value={this.state.fat} onChange={this.handleChange.bind(this)} id="fat" placeholder="Enter Fat in grams"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="protein">Protein</label>
                                <input type="number" value={this.state.protein} onChange={this.handleChange.bind(this)} id="protein" placeholder="Enter Protein in grams"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="carbs">Carbs</label>
                                <input type="number" value={this.state.carbs} onChange={this.handleChange.bind(this)} id="carbs" placeholder="Enter Carbs in grams"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="weight">Weight</label>
                                <input type="number" value={this.state.weight} onChange={this.handleChange.bind(this)} id="weight" placeholder="Enter lbs"/>
                            </div>
                            <div className="form-control">
                                <label htmlFor="desiredWeight">Desired Weight</label>
                                <input type="number" value={this.state.desiredWeight} onChange={this.handleChange.bind(this)} id="desiredWeight" placeholder="Enter Desired lbs"/>
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
                                console.log("BUTTON");
                                this.createPreferences()
                                // this.props.history.push('/account');
                                // window.location.reload();
                            }}
                        >
                            Continue
                        </Button>
                    </form>
                </div>
            </Container>
        )
    }
}

export default Questionnaire;