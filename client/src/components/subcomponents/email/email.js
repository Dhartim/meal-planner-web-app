import React, { Component } from 'react';

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
import axios from 'axios';

import useStyles from './emailStyle';
import TextField from "@material-ui/core/TextField";
import './email.css'

// import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp'

export class Email extends Component{

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this); 
     this.state = {
       firstName: '',
       email: '',
       body: '',
     }
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`The values are ${this.state.firstName}, ${this.state.lastName}, ${this.state.email} , ${this.state.password}`)
    this.setState({
      firstName: '',
      email: '',
      body:''
    })
  }
  
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
            
          }}
        />
      </Grid>
    );
  };
  
  firstName = () => {
    return(
      <Grid item xs={12}>
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

  textBody = () => {
    return(
      <Grid item xs={12}>
        <TextField
        variant="outlined"
        required
        fullWidth
        id="body"
        label="What would you like to tell us"
        name="body"
        value= {this.state.body}
        multiline
        rows="4"
        onChange={e => {
          this.setState({body: e.target.value})
        }}
        />
      </Grid>
    )
  }

  render() {
    const classes = useStyles;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <center>
            <Typography component="h1" variant="h5">
              Contact us
            </Typography>
          </center>

          <form className={classes.form} onSubmit={this.onSubmit}>
            <Grid container spacing={2}>
              {this.firstName("firstName", "First Name")}
         
              {this.email()}
              {this.textBody()}
         
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => {
                  
                }
              }
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    )
  }
}

export default Email;