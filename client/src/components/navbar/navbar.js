import React from 'react';

import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from "./navbarstyle";

export function Navbar(props) {
    const classes = useStyles();
    const authorized = props.auth;
    console.log(`logged in=${authorized}`);

    if(authorized) {
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
              </IconButton>
              <Typography className={classes.title}>
                <Button
                  href={'/'}
                  color="inherit"
                >
                  <Typography component={'span'} variant="h6" className={classes.title}>
                    Meal Planner
                  </Typography>
                </Button>
              </Typography>
              <Button
                href={'/'}
                className={classes.auth}
                color="inherit"
                onClick={() => {
                  localStorage.removeItem('jwtToken');
                }}
              >
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    } else {
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
              </IconButton>
              <Typography className={classes.title}>
                <Button
                  href={'/'}
                  color="inherit"
                >
                  <Typography component={'span'} variant="h6" className={classes.title}>
                    Meal Planner
                  </Typography>
                </Button>
              </Typography>
              <Button
                href={'/register'}
                className={classes.auth}
                color="inherit"
              >
                Sign up
              </Button>
              <Button
                href={'/login'}
                className={classes.auth}
                color="inherit"
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
}
export default Navbar;