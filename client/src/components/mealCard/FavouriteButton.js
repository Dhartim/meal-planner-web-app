import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa/";
import axios from "axios";

function IsFav(props) {
    return <span className="icon heart" onClick={props.onClick}><FaRegHeart size ={25}/></span>;
}

function IsNotFav(props) {
    return <span className="icon toggled heart" onClick={props.onClick}><FaHeart size ={25}/></span>;
}

class FavouriteButton extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      isFaved: false,
      meal_id: this.props.meal_id,
      // favorites: this.props.favorites
    };
    this.addLikes = this.addLikes.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.isFavorite = this.isFavorite.bind(this);
  }

  componentDidMount() {
    // const isFaved = this.handleCheck(this.state.meal_id)
    this.isFavorite();
  }

  isFavorite() {
    var { meal_id } = this.state;
    if(meal_id === undefined) {
      meal_id = 0;
    }
    // console.log("meal_id=%d", meal_id);

    axios
      .get(`/favorites/isfavorite/${meal_id}`, {
        headers: {
          'x-access-token': localStorage.getItem('jwtToken')
        }
      })
      .then(res => {
        if ((res.status === 201) || (res.status === 200)) {
          this.setState({
            isFaved: res.data.isFavorite
          });
          // console.log(res);
        } else {
          console.log(`Error`);
        }
      })
      .catch(error => {
        console.log("error: %s", error);
      })
  };

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

    axios.delete('/favorites', {
      headers: {"x-access-token" : `${jwtToken}`
      },
      data: {
        "mealId": this.state.meal_id
      }
    })
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

  // handleCheck(meal_id) {
  //   return this.state.favorites.some(item => meal_id === item.mealId);
  // }

  render(){
    const { isFaved } = this.state;
    let favBtn;
    if (isFaved) {
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
