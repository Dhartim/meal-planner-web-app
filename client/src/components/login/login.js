import React, { Component } from "react";
// import { Button, FormGroup, FormControl, FormControlLabel } from "react-bootstrap";
import { Form, Button } from 'react-bootstrap'
import Axios from "axios";

import "./login.css";

export default class Login extends Component {

  onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    Axios.post('/login', { email, password })
      .then((response) => {
        console.log(response.token);

        if (response.payload.status === 200) {
          sessionStorage.setItem('jwtToken', response.payload.data.token);
        } else {
          // TODO: Redirect and display message
        }
      })
  };
  // constructor(props) {
  //     console.log("super props")
  //     // super(props);
  //     console.log(props)
  //     console.log("state")
  //     this.state = {
  //         email: "",
  //         password: ""
  //     };
  //     console.log(this.state)
  // }

  // validateForm() {
  //     return this.state.email.length > 0 && this.state.password.length > 0;
  // }
  //
  // handleChange = event => {
  //     this.setState({
  //         [event.target.id]: event.target.value
  //     });
  // }
  //
  // handleSubmit = event => {
  //     event.preventDefault();
  // }

  render() {
    return (

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

        /*<div>
            <p>FUCK REACT</p>
             <form>
                 <FormGroup>
                     <FormControlLabel>Email</FormControlLabel>
                 </FormGroup>
                 <FormGroup>
                     <FormControlLabel>Password</FormControlLabel>
                 </FormGroup>
                 <Button>Login</Button>
             </form>
         </div>


        <div className="Login">
             <form onSubmit={this.handleSubmit}>
                 <FormGroup controlId="email" bsSize="large">
                     <FormControlLabel>Email</FormControlLabel>
                     <FormControl
                         autoFocus
                         type="email"
                         value={this.state.email}
                         onChange={this.handleChange}
                     />
                 </FormGroup>
                 <FormGroup controlId="password" bsSize="large">
                     <FormControlLabel>Password</FormControlLabel>
                     <FormControl
                         value={this.state.password}
                         onChange={this.handleChange}
                         type="password"
                     />
                 </FormGroup>
                 <Button
                     block
                     bsSize="large"
                     disabled={!this.validateForm()}
                     type="submit"
                 >
                     Login
                 </Button>
             </form>
         </div>*/
    );
  }
}