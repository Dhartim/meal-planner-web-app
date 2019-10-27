import React, { Component } from 'react';
import axios from 'axios';

import CuisineCards from '../cuisineCards'
import Spinner from '../spinner'

import {UserContext} from "../../context/usercontext";

export class Home extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);

    this.state = {
      cuisines: [],
      loader: true,
      loader2: true,
    }
  }

  componentDidMount(){
    axios
      .get('/cuisines')
      .then(res => {
        this.setState({
          cuisines: res.data,
          loader: false
        })
      })
      .catch(error => error)
  }

  render() {
    let isLoading = true;
    let cuisineList = [];

    const userContext = this.context;
    console.log("HOME - context={userId: %s, authorized: %s}", userContext.userId, userContext.authorized);

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

// Home.contextType = UserContext;

export default Home;