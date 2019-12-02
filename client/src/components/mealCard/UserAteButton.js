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
        this.hasAte = this.hasAte.bind(this);
       // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.addChecked = this.addChecked.bind(this);
        this.removeChecked = this.removeChecked.bind(this);
    }

    componentDidMount() {
        this.hasAte();
    }
    // handleCheckboxChange = () =>{
    //     this.setState(initialState => ({
    //       checked: !initialState.checked,
    //     }));
    // }

    addChecked(){
        const jwtToken = localStorage.getItem('jwtToken');
    
        axios.post('/ate', 
            {"mealId": this.state.meal_id},
            { headers: {"x-access-token" : `${jwtToken}`} }
        )
        .then(response => {
            if ((response.status === 201) || (response.status === 200)) {
                this.setState({ checked : true });
                console.log("RESPONSE = ",response);
            } else {
                console.log(`Error`);
            }
        })
        .catch(error => {
            console.log("some error is being caught: %s", error)
        });
    }
//this is not working properly. remove is not working , because meal IDS are not tracked properlycle
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

    hasAte() {
        var { meal_id } = this.state;
        if(meal_id === undefined) {
          meal_id = 0;
        }
    
        const token = localStorage.getItem('jwtToken');
    
        if(token !== null) {
          axios
            .get(`/hasAte/${meal_id}`, {
              headers: {
                'x-access-token': token
              }
            })
            .then(res => {
              if ((res.status === 201) || (res.status === 200)) {
                this.setState({
                  checked: res.data.hasAte
                });
                // console.log(res);
              } else {
                console.log(`Error`);
              }
            })
            .catch(error => {
              console.log("error: %s", error);
            })
        } else {
          console.log("User Ate button - unauthorized.");
        }
      };
//how to call these 2 functions ??
//Also need to do create At something??
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
                checked={this.state.checked}
                onChange = {this.addChecked}
             />
            </div>
            ))}
        </Form>
      </div>
    );
  }
}

export default UserAteButton;
