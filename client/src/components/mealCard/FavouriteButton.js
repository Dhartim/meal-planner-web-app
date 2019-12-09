import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa/";
import axios from "axios";

function IsFav(props) {
  return <span className="icon heart" onClick={props.onClick}><FaRegHeart size={25} /></span>;
}

function IsNotFav(props) {
  return <span className="icon toggled heart" onClick={props.onClick}><FaHeart size={25} /></span>;
}

class FavouriteButton extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      isFaved: false,
      meal_id: this.props.meal_id,
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
    if (meal_id === undefined) {
      meal_id = 0;
    }

    const token = localStorage.getItem('jwtToken');

    if (token !== null) {
      axios
        .get(`/favorites/isfavorite/${meal_id}`, {
          headers: {
            'x-access-token': token
          }
        })
        .then(res => {
          if ((res.status === 201) || (res.status === 200)) {
            this.setState({
              isFaved: res.data.isFavorite
            });
          } else {
            console.log(`Error`);
          }
        })
        .catch(error => {
          console.log("error: %s", error);
        })
    } else {
      console.log("favorite button - unauthorized.");
    }
  };

  updateLikes() {

    if (!this.state.updated) {
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

  addLikes() {
    const jwtToken = localStorage.getItem('jwtToken');

    axios.post('/favorites', { "mealId": this.state.meal_id }, { headers: { "x-access-token": `${jwtToken}` } })
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
      headers: {
        "x-access-token": `${jwtToken}`
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

  render() {
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
