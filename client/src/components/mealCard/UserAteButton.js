import React from 'react';
import axios from "axios";
//when checked -> it should call some api
//wen unchecked it should call some other api
import {Form} from "react-bootstrap";
class UserAteButton extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            checked: false,
            meal_id: this.props.meal_id,
        };
        
       // this.isChecked = this.isChecked.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.addChecked = this.addChecked.bind(this);
        this.removeChecked = this.removeChecked.bind(this);
    }

    handleCheckboxChange = () =>{
        this.setState(initialState => ({
          checked: !initialState.checked,
        }));
    }

    addChecked(){
        const jwtToken = localStorage.getItem('jwtToken');
    
        axios.post('/ate', {"mealId": this.state.meal_id},{ headers: {"x-access-token" : `${jwtToken}`} })
        .then(response => {
            if ((response.status === 201) || (response.status === 200)) {
                this.setState({ checked : true });
                console.log(response);
            } else {
                console.log(`Error`);
            }
        })
        .catch(error => {
            console.log("some error is being caught: %s", error)
        });
    }

    removeChecked() {    
        const jwtToken = localStorage.getItem('jwtToken');
    
        axios.delete('/ate', {
          headers: {"x-access-token" : `${jwtToken}`
          },
          data: {
            "mealId": this.state.meal_id
          }
        })
        .then(response => {
            if ((response.status === 200) || (response.status === 204)) {
                this.setState({ checked: false });
                console.log(response);
            } else {
                console.log(`Error`);
            }
        })
        .catch(error => {
            console.log("some error is being caught: %s", error)
        });
    }
//how to call these 2 functions ??
//Also need to do create At something??
/*
Jordan Aldujaili 10:17 PM
sorry.. so i only mean use created at to make sure the user doesnt keep hitting 
the “i ate” button on the same day. it should clear out everyday so if the user wants to
eat the same meal the next day, we can still record it and they wont see the 
i ate box filled in from yesterday. its okay for this table to have the same 
userid and the same mealId, as long as its not created at has a different day.
*/
  render(){
      if(this.state.checked)
      {
          //when checkbox is checked
          //call post api 
      }
      else
      {
          //when checkbox is not checked.
          //call delete api
      }
    return (
      <div>
        <Form>
            {['checkbox'].map(type => (
            <div key={`default-${type}`} className="mb-3">
            <Form.Check
                type={type}
                id={`default-${type}`}
                label={`I ate it`}
                checked={this.state.checked}
                onChange = {this.handleCheckboxChange}
             />
            </div>
            ))}
        </Form>
      </div>
    );
  }
}

export default UserAteButton;
