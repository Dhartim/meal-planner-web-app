import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa/";
class FavouriteButton extends React.Component {

  constructor(props){

    super(props);
    this.state ={
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
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

  render(){
    return (
        <div>
            {/* //both of these should change or toggle for favourtie and non favourite button */}
            {/* //need to update value of hidden on click and hide and show it  */}
            <FaHeart size ={20} hidden = {true}/> 
            <FaRegHeart size ={20} hidden = {false}/>
        </div>
    );

  }


}

export default FavouriteButton;
