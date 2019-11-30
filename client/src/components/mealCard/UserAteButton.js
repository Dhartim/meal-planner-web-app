import React from 'react';
// import { FaRegHeart, FaHeart } from "react-icons/fa/";
//import axios from "axios";
//when checked -> it should call some api
//wen unchecked it should call some other api
import {Form} from "react-bootstrap";
class UserAteButton extends React.Component {
    state = { checked: false }
  handleCheckboxChange = event =>
    this.setState({ checked: event.target.checked })
  
  render(){
    return (
      <div>
        <Form>
            {['checkbox'].map(type => (
            <div key={`default-${type}`} className="mb-3">
            <Form.Check
                type={type}
                id={`default-${type}`}
                label={`I ate it`}
             />
            </div>
            ))}
        </Form>
      </div>
    );
  }
}

export default UserAteButton;
