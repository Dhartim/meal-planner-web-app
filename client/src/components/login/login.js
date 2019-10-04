import React, { Component } from "react";
// import { Button, FormGroup, FormControl, FormControlLabel } from "react-bootstrap";
import { Form, Button } from 'react-bootstrap'
import Axios from "axios";

import "./login.css";
import {Redirect} from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
  };

  tryLogin = () => {
    const { email, password } = this.state;

    Axios.post('/login', {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(`token=${response.headers.token}`);
      console.log(`status=${response.status}`);

      if (response.status === 200) {
        console.log(`Got token`);
        localStorage.setItem('jwtToken', response.headers.token);
        this.props.history.push('/');
        window.location.reload();
      } else {
        console.log(`Must redirect`);
        // TODO: Redirect and display message
      }
    })
    .catch(error => {
      console.log("LOGIN - error status code: %s", error);
    });
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

      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="formBasicEmail">
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={this.state.email}
            type={'email'}
            autoComplete="email"
            onChange={e => {
              this.setState({ email: e.target.value });
              this.setState({ validEmail: e.target.validity.valid });
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            value={this.state.password}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => {
              this.setState({ password: e.target.value })
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => {
          this.tryLogin();
        }}>
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