import React, { Component } from 'react';
import axios from 'axios';

import CuisineCards from '../cuisineCards'
import Spinner from '../spinner'

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cuisines: [],
      // favorites: [],
      loader: true,
      loader2: true,
    }
  }

  componentDidMount(){
    axios
      .get('/cuisines')
      .then(res => this.setState({
        cuisines: res.data,
        loader: false
      }))
      .catch(error => error)
  }

  render() {

    let isLoading = true;
    let cuisineList = [];

    if(!this.state.loader)
    {
      
      cuisineList = this.state.cuisines.map(cuisine => 
        cuisine.Meals.length > 0 && 
        <
          CuisineCards 
          key={cuisine.id}
          meals={cuisine.Meals}
          cuisineType= { cuisine.cuisineType }
        />
      );

      isLoading = false;
    }
    else
    {
     
      isLoading = true;
      
    }

    return(
      <div>
        {
          !isLoading ? cuisineList : <Spinner />
        }
      </div>
    );
  }
}
export default Home;