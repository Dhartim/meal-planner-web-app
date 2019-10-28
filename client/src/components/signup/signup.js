import React, { Component } from 'react';
import axios from 'axios';
import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';
import { 
  Avatar,
  Button,
  CssBaseline,
  Link,
  Grid,
  Box,
  Typography,
  Container
  } from '@material-ui/core';

// Styles and layouts
import useStyles from './signupstyle';
import TextField from "@material-ui/core/TextField";

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
    console.log(`The values are ${this.state.firstName}, ${this.state.lastName}, ${this.state.email} , ${this.state.password}`)
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
      <Grid item xs={12} sm={6}>
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
      </Grid>
    );
  };

  lastName = () => {
    return(
      <Grid item xs={12} sm={6}>
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
      </Grid>
    );
  };

  email = () => {
    return(
      <Grid item xs={12}>
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
      </Grid>
    );
  };

  password = () => {
    return(
      <Grid item xs={12}>
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
      </Grid>
    );
  };

  copyright = () => {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Meal Planner
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  };

  render() {
    const classes = useStyles;

    let { errorText, validEmail } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <center>
            <Avatar className={classes.avatar} >
              <FastfoodSharpIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </center>

          <form className={classes.form} onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              {this.firstName("firstName", "First Name")}
              {this.lastName("lastName", "Last Name")}
              {this.email()}
              {this.password()}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                  if (validEmail) {
                    this.signup()
                  }
                }
              }
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          {this.copyright()}
        </Box>
        <br/>
        {errorText}
      </Container>
    );
  }
}

export default SignUp;