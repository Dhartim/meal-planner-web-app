import React, { Component } from "react";
import { Form, Button } from 'react-bootstrap'
import Axios from "axios";

import "./login.css";
import TextField from "@material-ui/core/TextField";
// import AccountContext from "../accountPage/accountContext";
// import AccountProvider from "../accountPage/accountContext";

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
    // const EmailContext = React.createContext('email')
    const { email, password } = this.state;
    console.log(this.state)
    Axios.post('/login', {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
      console.log(`token=${response.headers.token}`);
      console.log(`status=${response.status}`);

      if (response.status === 200) {
        console.log(`Got token`);
        localStorage.setItem('jwtToken', response.headers.token);
        this.props.history.push('/');
        window.location.reload();
        // AccountContext.email = email;
        // console.log("AccountContext");
        // console.log(AccountContext);
      } else {
        console.log(`Must redirect`);
        // TODO: Redirect and display message
      }
    })
    .catch(error => {
      console.log("LOGIN - error status code: %s", error);
      console.log(error);
    });
  };
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
        {/*<AccountProvider value={this.state}/>*/}
      </Form>
    );
  }
}