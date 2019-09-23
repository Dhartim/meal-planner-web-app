import React, { Component } from 'react';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FastfoodSharpIcon from '@material-ui/icons/FastfoodSharp';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// Styles and layouts
import useStyles from './signupstyle';
import TextField from "@material-ui/core/TextField";

export class SignUp extends Component {
  constructor(props) {
     super(props);

     this.state = {
       firstName: '',
       lastName: '',
       email: '',
       password: '',
       errorText: '',
     }
  }

  signup = async () => {
    console.log("SIGNUP");
    const { firstName, lastName, email, password } = this.state;

    try {
      return axios.post('/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
      .then(res => {
        console.log("response: %s", res);
        console.log("response data: %s", res.data);
        this.setState({errorText: 'SUCCESS!!!'});
      })
      .catch(error => {
        console.log("error status code: %s", error.response.status);
        let statusCode = error.response.status;
        if(statusCode === 409) {
          this.setState({errorText: 'Email is already taken. Please try again.'});
        }
      });
    } catch (err) {
      console.log("some error is being caught: %s", err)
    }
    // console.log("response: %s", res);
    // console.log("response data: %s", res.data);
    // return res;

    // const response = await axios({
    //   method: 'POST',
    //   url: `/register`,
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json;charset=UTF-8',
    //   },
    //   data: {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password
    //   }
    // });
    // console.log("response.status: " + response.status);
    //
    // let responseOK = response && response.status === 200 && response.statusText === 'OK';
    //
    // if (responseOK) {
    //   const body = await response;
    //   console.log("body.token: " + body.token);
    //   return body;
    // } else {
    // }
  };

  firstName = (nam, lab) => {
    return(
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id={nam}
          label={lab}
          name={nam}
          autoComplete="fname"
          onChange={e => {
            this.setState({ firstName: e.target.value })
          }}
        />
      </Grid>
    );
  };

  lastName = (nam, lab) => {
    return(
      <Grid item xs={12} sm={6}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id={nam}
          label={lab}
          name={nam}
          autoComplete="fname"
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
          autoComplete="email"
          onChange={e => {
            this.setState({ email: e.target.value })
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

    let { errorText } = this.state;

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

          <form className={classes.form} noValidate>
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
              onClick={() =>
                this.signup()
                    // .then(res => {
                    //   console.log("res: " + res);
                    //   console.log("response data: %s", res.data);
                    //   this.setState({ test: 'created'});
                    //   window.location.reload();
                    // })
                    // .catch(err => console.log("error: " + err))
              }
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
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