import React, { Component } from 'react';
import axios from 'axios';
import CuisineCards from '../cuisineCards'
import Spinner from '../spinner'
import Backdrop from '../backdrop';
import Modal from '../modal';
import RadioGroup from '../radioGroup';
import { Form, Button } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/DropdownItem';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cuisines: [],
      favorites: [],
      loader1: true,
      loader2: true,
      modalRendering: false,
    }
  }

  startCreateEventHandler = () => {
    this.setState({ modalRendering: true });
  };

  generateMeals = () => {
    this.setState({ modalRendering: false });
  };

  modalCancelHandler = () => {
    this.setState({ modalRendering: false });
  };

  componentDidMount(){
    axios.get('/cuisines')
      .then(res => this.setState({cuisines: res.data, loader1: false}))
      .catch(error => error)

    const jwtToken = localStorage.getItem('jwtToken');
    
    axios.get('/favorites', { headers: {"x-access-token" : `${jwtToken}`} })
      .then(res => this.setState({favorites: res.data, loader2: false}))
      .catch(error => error)
  }

  render() {

    let isLoading = true;
    let cuisineList = [];

    if(!this.state.loader1 && !this.state.loader2) {
      cuisineList = this.state.cuisines.map(cuisine => 
        cuisine.Meals.length > 0 && 
        <
          CuisineCards 
          key={cuisine.id}
          meals={cuisine.Meals}
          cuisineType= { cuisine.cuisineType }
          favorites= {this.state.favorites}
        />
      )
      isLoading = false;
    } else {
      isLoading = true; 
    }

    return(
      <div>
        <button onClick={this.startCreateEventHandler}>See questionnaire</button>
          { !isLoading ? cuisineList : <Spinner /> }
          { this.state.modalRendering && <Backdrop/> }
          { this.state.modalRendering && (
            <Modal
              title="Meal Planner"
              canCancel
              canConfirm
              onCancel={this.modalCancelHandler}
              onConfirm={this.generateMeals}
            >
            <form>
              <RadioGroup 
                radio={[
                  {id: "diet", name:"diet", value:"vegan"},
                  {id: "diet", name:"diet", value:"vegetarian"},
                  {id: "diet", name:"diet", value:"paleo"},
                  {id: "diet", name:"diet", value:"keto"},
                  {id: "diet", name:"diet", value:"anything"},
                ]}
              />
              <div className="form-text__container">
                <div className="form-control">
                  <label htmlFor="macros">Macros</label>
                  <input type="number" id="macros" ref={this.titleElRef} placeholder="Enter Calorie Goal"/>
                </div>
                <div className="form-control">
                  <label htmlFor="fat">Fat</label>
                  <input type="number" id="fat" ref={this.fatElRef} placeholder="Enter Fat in grams" />
                </div>
                <div className="form-control">
                  <label htmlFor="protein">Protein</label>
                  <input type="number" id="protein" ref={this.proteinElRef} placeholder="Enter Protein in grams"/>
                </div>
                <div className="form-control">
                  <label htmlFor="carbs">Carbs</label>
                  <input type="number" id="carbs" ref={this.carbsElRef} placeholder="Enter Carbs in grams"/>
                </div>
                <div className="form-control">
                  <label htmlFor="weight">Weight</label>
                  <input type="number" id="weight" ref={this.weightElRef} placeholder="Enter lbs"/>
                </div>
                <div className="form-control">
                  <label htmlFor="desiredWeight">Desired Weight</label>
                  <input type="number" id="desiredWeight" ref={this.desiredWeightElRef} placeholder="Enter Desired lbs"/>
                </div>
              </div>
              <div className="radio-label__con">
                <label htmlFor="priceLimit">Price Limit</label>
                <RadioGroup 
                  radio={[
                    {id: "price", name:"price", value:"<$5"},
                    {id: "price", name:"price", value:"<$10"},
                    {id: "price", name:"price", value:"<$15"},
                    {id: "price", name:"price", value:"No Limit"},
                  ]}
                />
              </div>
            </form>
          </Modal>
        )}
      </div>
    );
  }
}
export default Home;