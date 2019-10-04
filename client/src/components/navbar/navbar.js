import React from 'react';

import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from "./navbarstyle";

export function Navbar() {
    const classes = useStyles();
    const token = localStorage.getItem('token');
    console.log(`token=${token}`);

    if(token !== null) {
      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon/>
              </IconButton>
              <Typography className={classes.title}>
                <Button
                  href={'/home'}
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
                  localStorage.removeItem('token');
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
                  href={'/home'}
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
            </Toolbar>
          </AppBar>
        </div>
      )
    }
}
export default Navbar;