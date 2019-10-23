import React, { Component } from 'react';
import axios from 'axios';
import CuisineCards from '../cuisineCards'
import Spinner from '../spinner'

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
          { !isLoading ? cuisineList : <Spinner /> }
      </div>
    );
  }
}
export default Home;