import React, { Component } from 'react';
import axios from 'axios';
import {Container, Row, Col, Button} from 'react-bootstrap';
import {GiMeal }from "react-icons/gi/";
import { 
  Link
  } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
// Styles and layouts
import "./signup.css";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this); 
     this.state = {
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       validEmail: false,
       errorText: '',
     }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.firstName}, ${this.state.lastName}, ${this.state.email}, ${this.state.password}`)
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    })
  }

  signup = () => {
    console.log("SIGNUP");
    const { firstName, lastName, email, password } = this.state;

    return axios.post('/register', {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    })
    .then(res => {
      this.setState({errorText: ''});
      //console.log("RESPONSE" + res);
      console.log("response token: %s", res.headers.token);
      localStorage.setItem('jwtToken', res.headers.token);
      this.props.history.push('/preferences');
      window.location.reload();
    })
    .catch(error => {
      console.log("Axios post error: %s", error);
      window.location.reload();
      let statusCode = error.response.status;
      if(statusCode === 409) {
        this.setState({errorText: 'Email is already taken. Please try again.'});
      }
    });
  };

  firstName = () => {
    return(
        <TextField
          variant="outlined"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          value= {this.state.firstName}
          autoComplete="fname"
          onChange={e => {
            this.setState({firstName: e.target.value})
          }}
        />
    );
  };

  lastName = () => {
    return(
        <TextField
          variant="outlined"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          value= {this.state.lastName}
          autoComplete="lname"
          onChange={e => {
            this.setState({ lastName: e.target.value })
          }}
        />
    );
  };

  email = () => {
    return(
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
    );
  };

  password = () => {
    return(
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
    );
  };

  // copyright = () => {
  //   return (
  //     <h6 color="textSecondary" align="center">
  //       {'Copyright © '}
  //       <Link color="inherit" href="https://material-ui.com/">
  //         Meal Planner
  //       </Link>{' '}
  //       {new Date().getFullYear()}
  //       {'.'}
  //     </h6>
  //   );
  // };

  render() {
    let { errorText, validEmail } = this.state;

    return (
      <Container className="signup_box">
        <div>
          <center>
            <GiMeal size={50}/>
            <h3>
              Sign up
            </h3>
          </center>
          <span>&nbsp;</span>
          <form  onSubmit={this.onSubmit}>
            <Container>
              <Row>
                <Col>{this.firstName("firstName", "First Name")}</Col>
                <Col>{this.lastName("lastName", "Last Name")}</Col>
              </Row>
              <span>&nbsp;</span>
              <Row>
                <Col>{this.email()}</Col>
              </Row>
              <span>&nbsp;</span>
              <Row>
                <Col>{this.password()}</Col>
              </Row>
              <span>&nbsp;</span>
              <Row>
              <center>
                  <Col>
                    <Button
                      variant="primary"
                      type="submit"
                      className= "signup_button"
                      onClick={() => {
                          if (validEmail) {
                            this.signup()
                          }
                        }
                      }
                    >
                      Sign Up
                    </Button>
                  </Col>
              </center>
              </Row>
              <span>&nbsp;</span>
            </Container>
            <Container justify="flex-end">
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
            </Container>
          </form>
        </div>
        {errorText}
      </Container>
    );
  }
}

export default SignUp;