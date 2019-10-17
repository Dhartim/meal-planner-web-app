import React from 'react';
import { FaRegHeart, FaHeart, FaCode } from "react-icons/fa/";
import axios from "axios";

function IsFav(props) {
    return <p className="icon heart" onClick={props.onClick}><FaRegHeart size ={20}/></p>;
}

function IsNotFav(props) {
    return <p className="icon toggled heart" onClick={props.onClick}><FaHeart size ={20}/></p>;
}

class FavouriteButton extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      isFaved: false,
      meal_id: this.props.meal_id,
      favorites: this.props.favorites
    }
    this.addLikes = this.addLikes.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    const isFaved = this.handleCheck(this.state.meal_id);
    this.setState({ isFaved: isFaved });
    console.log(this.state.favorites);
    console.log('test ' + isFaved);
  }

  updateLikes() {

    if(!this.state.updated) {
        this.setState((prevState, props) => {
        return {
          updated: true
        };
      });
    } else {

      this.setState((prevState, props) => {
        return {
          updated: false
        };
      });
    }
  }

  addLikes(){
    const jwtToken = localStorage.getItem('jwtToken');

    axios.post('/favorites', {"mealId": this.state.meal_id},{ headers: {"x-access-token" : `${jwtToken}`} })
    .then(response => {
        if ((response.status === 201) || (response.status === 200)) {
            this.setState({ isFaved: true });
            console.log(response);
        } else {
            console.log(`Error`);
        }
    })
    .catch(error => {
        console.log("some error is being caught: %s", error)
    });
  }

  removeLike() {    
    const jwtToken = localStorage.getItem('jwtToken');
    const meal_id = this.state.meal_id;

    const url = `/favorites/${meal_id}`

    axios.delete(url, { headers: {"x-access-token" : `${jwtToken}`} })
    .then(response => {
        if ((response.status === 200) || (response.status === 204)) {
            this.setState({ isFaved: false });
            console.log(response);
        } else {
            console.log(`Error`);
        }
    })
    .catch(error => {
        console.log("some error is being caught: %s", error)
    });
  }

  handleCheck(meal_id) {
    return this.state.favorites.some(item => meal_id === item.mealId);
  }
// there is some bug in my FaCode, need help with it 
  render(){
    let favBtn;
    if (this.state.isFaved) {
        favBtn = <IsNotFav onClick={this.removeLike} />;
    } else {
        favBtn = <IsFav onClick={this.addLikes} />;
    }
    return (
      <div>
          {favBtn}
      </div>
    );
  }
}

export default FavouriteButton;
