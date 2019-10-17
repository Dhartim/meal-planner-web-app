import React from 'react';
import { FaRegHeart } from "react-icons/fa/";
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
    return(
      <div>
        <p>
            <FaRegHeart size ={20} onClick={this.updateLikes}/>
            {/* //when click on this button then meal id should go to favourite table or column of user  */}
        </p>
      </div>
    );

  }


}

export default FavouriteButton;
