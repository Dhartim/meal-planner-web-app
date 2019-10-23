import React, { Component } from 'react';
import axios from 'axios';
import CuisineCards from '../cuisineCards'
import Spinner from '../spinner'
import Backdrop from '../backdrop';
import Modal from '../modal';
import RadioGroup from '../radioGroup';
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

    // let isLoading = true;
    // let cuisineList = [];

    // if(!this.state.loader1 && !this.state.loader2) {
    //   cuisineList = this.state.cuisines.map(cuisine => 
    //     cuisine.Meals.length > 0 && 
    //     <
    //       CuisineCards 
    //       key={cuisine.id}
    //       meals={cuisine.Meals}
    //       cuisineType= { cuisine.cuisineType }
    //       favorites= {this.state.favorites}
    //     />
    //   )
    //   isLoading = false;
    // } else {
    //   isLoading = true; 
    // }

    return(
      <div>
        <button onClick={this.startCreateEventHandler}>this is a button</button>
          {/* { !isLoading ? cuisineList : <Spinner /> } */}
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
            
              <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={this.titleElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="price">Price</label>
                <input type="number" id="price" ref={this.priceElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="date">Date</label>
                <input type="datetime-local" id="date" ref={this.dateElRef} />
              </div>
              <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows="4"
                  ref={this.descriptionElRef}
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