import React, { Component } from 'react';
import axios from 'axios';
import CuisineCards from '../cuisineCards'

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cuisines: []
    }
  }

  componentDidMount(){
    axios.get('/cuisines')
      .then(res => this.setState({cuisines: res.data}))
      .catch(error => error)
  }

  render() {
    const cuisineList = this.state.cuisines.map(cuisine => 
      cuisine.Meals.length > 0 && 
      <
        CuisineCards 
        key={cuisine.id}
        meals={cuisine.Meals}
      />
    )

    return(
      <div>
        { cuisineList }
      </div>
    );
  }
}
export default Home;