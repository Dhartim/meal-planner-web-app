import React from 'react';
import { FaRegStar } from "react-icons/fa/";
class FavouriteButton extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes(event) {

    if(!this.state.updated) {
        event.currentTarget.style.backgroundColor = '#ccc';
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

  render(){

    return(
      <div>
        <p onClick={this.updateLikes}>
            <FaRegStar />
        </p>
      </div>
    );

  }


}

export default FavouriteButton;
